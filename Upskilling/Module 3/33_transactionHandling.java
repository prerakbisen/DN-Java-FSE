import java.sql.*;

public class transactionHandling {
    public static void main(String[] args)
            throws Exception {

        Connection con =
        DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/test",
        "root","root");

        con.setAutoCommit(false);

        try {

            Statement st =
                    con.createStatement();

            st.executeUpdate(
            "update account set bal=bal-100 where id=1");

            st.executeUpdate(
            "update account set bal=bal+100 where id=2");

            con.commit();

            System.out.println("Success");
        }
        catch(Exception e) {
            con.rollback();
        }

        con.close();
    }
}