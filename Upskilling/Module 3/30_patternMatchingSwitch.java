public class patternMatchingSwitch {

    static void check(Object obj) {

        switch(obj) {
            case Integer i -> System.out.println("Integer");
            case String s -> System.out.println("String");
            default -> System.out.println("Other");
        }
    }

    public static void main(String[] args) {
        check(10);
        check("Hello");
    }
}