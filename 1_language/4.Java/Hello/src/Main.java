import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        int[] arr = new int[n];
        int[] dp = new int[n];

        String[] st = br.readLine().split(" ");
        for (int i = 0; i < st.length; i++) {
            arr[i] = Integer.parseInt(st[i]);
            dp[i] = arr[i];
        }

        for (int i = 1; i < n; i++) {           // 현재 원소
            for (int j = 0; j < i; j++) {       // 이전 원소
                if (arr[i] > arr[j]) {          
                    dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                }
            }
        }

        int max = 0;
        for (int i = 0; i < n; i++) {
            max = Math.max(max, dp[i]);
        }

        System.out.println(max);

    }
}