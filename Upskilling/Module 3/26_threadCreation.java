public class threadCreation {
    public static void main(String[] args){
        myThread t1 = new myThread();
        t1.start();
    }
}
class myThread extends Thread{
    public void run(){
        System.out.println("Thread is running");
    }
}
