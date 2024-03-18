<%--
  Created by IntelliJ IDEA.
  User: songs
  Date: 2024-03-18
  Time: 오전 10:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <%
        String name = "heojune";
        int age = 28;
    %>

    <p>hello <%= name %></p>

    <% if(age > 18) { %>
    <p>You are an adult.</p>
    <% } else { %>
    <p>You are a minor.</p>
    <% } %>
</body>
</html>
