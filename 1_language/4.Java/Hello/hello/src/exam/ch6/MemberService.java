package exam.ch6;

public class MemberService {
    private String id;
    private String password;

    public MemberService() {
    }

    public MemberService(String id) {
        this.id = id;
    }

    public MemberService(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean login(String id, String password) {
        if (id.equals("hong") && password.equals("12345")) {
            return true;
        } else {
            return false;
        }
    }

    public void logout() {
        System.out.println("로그아웃되었습니다.");
    }

    public static void main(String[] args) {
        MemberService memberService = new MemberService();

        memberService.setId("hong");
        memberService.setPassword("12345");

        // boolean result = memberService.login("hong", "12345");
        boolean result = memberService.login(memberService.id, memberService.password);

        System.out.println(result);

        if(result) {
            System.out.println("id : " + memberService.id + " password : " + memberService.password + " 로그인 되었습니다.");
            memberService.logout();
        } else {
            System.out.println("아이디와 비밀번호가 올바르지 않습니다.");
        }
    }

}
