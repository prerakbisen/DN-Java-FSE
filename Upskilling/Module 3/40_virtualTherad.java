public class virtualTherad {
    public static void main(String[] args) {

        for(int i=1;i<=100;i++) {

            Thread.startVirtualThread(() ->
                System.out.println("Virtual Thread"));
        }
    }
}