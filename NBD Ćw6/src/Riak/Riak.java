package Riak;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Riak
{
    public static void main(String args[]) throws IOException, InterruptedException
    {
        Process execute;
        BufferedReader buffer;
        String line = new String("");

        ////Wrzucanie dokumentu////
        execute = Runtime.getRuntime()
                .exec("curl -H \"Content-Type: application/json\" –X POST -i http://192.168.0.25:8098/buckets/s26276/keys/hydra -d \"{\"gpu\": \"GTX-1080\", \"cpu\": \"i5-10400F\", \"ram\": 16, \"drive\": 2048}\"");
            execute.waitFor();
        //Wypisanie dokumentu
        execute = Runtime.getRuntime()
                .exec("curl -i http://192.168.0.25:8098/buckets/s26276/keys/hydra");
        execute.waitFor();
        buffer = new BufferedReader(new InputStreamReader(execute.getInputStream()), 1);
        line = buffer.readLine();
        while(line!=null)
        {
            System.out.println(line);
            line = buffer.readLine();
        }
        System.out.println();

        ////Modyfikacja dokumentu////
        Runtime.getRuntime()
                .exec("curl -H \"Content-Type: application/json\" –X PUT -i http://192.168.0.25:8098/buckets/s26276/keys/hydra -d \"{\"gpu\": \"GTX-2080\", \"cpu\": \"i5-10400F\", \"ram\": 16, \"drive\": 2048}\"\"")
                .waitFor();
        //Wypisanie dokumentu
        execute = Runtime.getRuntime()
                .exec("curl -i http://192.168.0.25:8098/buckets/s26276/keys/hydra");
        execute.waitFor();
        buffer = new BufferedReader(new InputStreamReader(execute.getInputStream()), 1);
        line = buffer.readLine();
        while(line!=null)
        {
            System.out.println(line);
            line = buffer.readLine();
        }
        System.out.println();

        ////Usuwanie dokumentu////
        Runtime.getRuntime()
                .exec("curl -X DELETE -i http://192.168.0.25:8098/buckets/s26276/keys/hydra")
                .waitFor();
        //Pobranie dokumentu
        execute = Runtime.getRuntime()
                .exec("curl -i http://192.168.0.25:8098/buckets/s26276/keys/hydra");
        execute.waitFor();
        buffer = new BufferedReader(new InputStreamReader(execute.getInputStream()), 1);
        line = buffer.readLine();
        while(line!=null)
        {
            System.out.println(line);
            line = buffer.readLine();
        }
    }
}
