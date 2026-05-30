public class operatorPrecedence {
    public static void main(String[] args) {
        int a = 10, b = 5, c = 2;
     // Multiplication has higher precedence than addition
        int result = a + b * c;
    // Output will be 20
        System.out.println("Result of a + b * c: " + result); 
    }
}
