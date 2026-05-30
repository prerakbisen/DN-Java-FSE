public class interface_eg {
    public static void main(String[] args) {
        Guitar g = new Guitar();
        Piano p = new Piano();
        g.play();
        p.play();
    }
}
interface Playable{
    void play();
}
class Guitar implements Playable{
    public void play(){
        System.out.println("Playing the guitar");
    }
}
class Piano implements Playable{
    public void play(){
        System.out.println("Playing the piano");
    }
}
