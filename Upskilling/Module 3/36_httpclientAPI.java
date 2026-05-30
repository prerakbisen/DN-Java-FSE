import java.net.URI;
import java.net.http.*;

public class httpclientAPI {
    public static void main(String[] args)
            throws Exception {

        HttpClient client =
                HttpClient.newHttpClient();

        HttpRequest request =
                HttpRequest.newBuilder()
                .uri(URI.create(
                "https://api.github.com"))
                .build();

        HttpResponse<String> response =
        client.send(request,
        HttpResponse.BodyHandlers.ofString());

        System.out.println(response.statusCode());
    }
}