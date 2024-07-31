package exam.a1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String[][] array = new String[N][2];

        for(int i = 0; i < N; i++) {
            String[] input = br.readLine().split(" ");
            array[i][0] = input[0]; // 나이
            array[i][1] = input[1]; // 이름
        }

        Arrays.sort(array, (String[] a,String[] b) -> {
            int ageA = Integer.parseInt(a[0]);
            int ageB = Integer.parseInt(b[0]);
            return ageA - ageB; // 나이순 정렬
        });

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < N; i++) {
            sb.append(array[i][0]).append(" ").append(array[i][1]).append("\n");
        }

        System.out.println(sb);

    }
}
