class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);
    }
}
public class customException {
    public static void main(String[] args) {
        int age = 16;
        try {
            if(age < 18){
                throw new InvalidAgeException("Age must be 18+");
            }
            System.out.println("Eligible");
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
}