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
