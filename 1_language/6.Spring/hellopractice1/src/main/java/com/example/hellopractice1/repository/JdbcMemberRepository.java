package com.example.hellopractice1.repository;


import com.example.hellopractice1.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceUtils;

import javax.sql.DataSource;
import javax.xml.crypto.Data;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.sql.DriverManager.getConnection;
//import org.springframework.jdbc.datasource.DataSourceUtils;

    public class JdbcMemberRepository implements MemberRepository {

        // DB와의 연결을 위해서 DataSource를 정의하는 듯 하다.
        private final DataSource dataSource;
        public JdbcMemberRepository(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        // Connection
        // getConnection(url, id, password) : DB의위치, DB계정, 비번
        // PrepareStatement :
        // Statement.RETURN_GENERATED_KEYS : DB상에 AUTO_INCREMENT 로 인해 자동으로 생성되어진 key(=id)를 가져오는 쿼리
        // executeUpdate() : select 구문이 아닐 때 사용, int값 반환, 구문 수행
        // ResultSet : 쿼리문이 SELECT면 ResultSet으로 받고, 그 외에는 int로 반환받는다.
        // getGeneratedKeys()
        // throw new SQLException
        // close() 쿼리를 다 사용했다면, ResultSet으로부터 역순으로 리소스 close()를 진행한다.
        // executeQuery() : 작성한 쿼리문 전송

        // Optional.of()
        // Optional.empty()

        // 쿼리문에서 ? <-
        @Override
        public Member save(Member member) {
            String sql = "insert into member(name) values(?)";
            Connection conn = null;
            PreparedStatement pstmt = null;
            ResultSet rs = null;
            try {
                conn = getConnection();
                pstmt = conn.prepareStatement(sql,
                        Statement.RETURN_GENERATED_KEYS);
                pstmt.setString(1, member.getName());
                pstmt.executeUpdate();
                rs = pstmt.getGeneratedKeys();
                if (rs.next()) {
                    member.setId(rs.getLong(1));
                } else {
                    throw new SQLException("id 조회 실패");
                }
                return member;
            } catch (Exception e) {
                throw new IllegalStateException(e);
            } finally {
                close(conn, pstmt, rs);
            }
        }
        @Override
        public Optional<Member> findById(Long id) {
            String sql = "select * from member where id = ?";
            Connection conn = null;
            PreparedStatement pstmt = null;
            ResultSet rs = null;
            try {
                conn = getConnection();
                pstmt = conn.prepareStatement(sql);
                pstmt.setLong(1, id);
                rs = pstmt.executeQuery();
                if(rs.next()) {
                    Member member = new Member();
                    member.setId(rs.getLong("id"));
                    member.setName(rs.getString("name"));
                    return Optional.of(member);
                } else {
                    return Optional.empty();
                }
            } catch (Exception e) {
                throw new IllegalStateException(e);
            } finally {
                close(conn, pstmt, rs);
            } }
        @Override
        public List<Member> findAll() {
            String sql = "select * from member";
            Connection conn = null;
            PreparedStatement pstmt = null;
            ResultSet rs = null;
            try {
                conn = getConnection();
                pstmt = conn.prepareStatement(sql);
                rs = pstmt.executeQuery();
                List<Member> members = new ArrayList<>();
                while(rs.next()) {
                    Member member = new Member();
                    member.setId(rs.getLong("id"));
                    member.setName(rs.getString("name"));
                    members.add(member);
                }
                return members;
            } catch (Exception e) {
                throw new IllegalStateException(e);
            } finally {
                close(conn, pstmt, rs);
            }
        }
        @Override
        public Optional<Member> findByName(String name) {
            String sql = "select * from member where name = ?";
            Connection conn = null;
            PreparedStatement pstmt = null;
            ResultSet rs = null;
            try {
                conn = getConnection();
                pstmt = conn.prepareStatement(sql);
                pstmt.setString(1, name);
                rs = pstmt.executeQuery();
                if(rs.next()) {
                    Member member = new Member();
                    member.setId(rs.getLong("id"));
                    member.setName(rs.getString("name"));
                    return Optional.of(member);
                }
                return Optional.empty();
            } catch (Exception e) {
                throw new IllegalStateException(e);
            } finally {
                close(conn, pstmt, rs);
            }
        }
        private Connection getConnection() {
            return DataSourceUtils.getConnection(dataSource);
        }
        private void close(Connection conn, PreparedStatement pstmt, ResultSet rs)
        {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } try {
            if (pstmt != null) {
                pstmt.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
            try {
                if (conn != null) {
                    close(conn);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } }
        private void close(Connection conn) throws SQLException {
            DataSourceUtils.releaseConnection(conn, dataSource);
        } }
