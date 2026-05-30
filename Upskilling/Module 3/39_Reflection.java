class Demo {
    public void show() {
        System.out.println("Hello");
    }
}

public class Reflection {
    public static void main(String[] args)
            throws Exception {

        Class<?> c =
                Class.forName("Demo");

        Object obj =
                c.getDeclaredConstructor()
                .newInstance();

        c.getMethod("show").invoke(obj);
    }
}