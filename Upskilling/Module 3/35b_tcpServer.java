import java.net.*;
import java.io.*;

public class tcpServer {
    public static void main(String[] args)
            throws Exception {

        ServerSocket ss =
                new ServerSocket(5000);

        Socket s = ss.accept();

        System.out.println("Connected");

        ss.close();
    }
}