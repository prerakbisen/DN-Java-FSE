import java.io.FileWriter;

public class fileWriting {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("output.txt");
        fw.write("Hello Java");
        fw.close();
        System.out.println("File Written");
    }
}