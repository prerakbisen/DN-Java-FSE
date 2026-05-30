import java.net.*;

public class tcpClient {
    public static void main(String[] args)
            throws Exception {

        Socket s =
        new Socket("localhost",5000);

        System.out.println("Connected");
    }
}