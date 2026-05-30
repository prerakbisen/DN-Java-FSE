import java.sql.*;

public class InsertJDBC {
    public static void main(String[] args) throws Exception {

        Connection con =
        DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/test",
        "root","root");

        PreparedStatement ps =
        con.prepareStatement(
        "insert into students values(?,?)");

        ps.setInt(1,101);
        ps.setString(2,"Rahul");

        ps.executeUpdate();

        System.out.println("Inserted");

        con.close();
    }
}