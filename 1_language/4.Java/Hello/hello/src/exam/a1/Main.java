package exam.a1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Stack<Integer> stack = new Stack<>();

        int K = Integer.parseInt(br.readLine());

        for (int i = 0; i < K; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            int k = Integer.parseInt(st.nextToken());

            if (k != 0) {
                stack.push(k);
            } else {
                stack.pop();
            }
        }

        int sum = 0;

        // stack에서 요소 빼는데 stack의 사이즈를 계속 참조하면 길이가 안맞음. 비어있는지 확인하면서 반복 (iterator 처럼)
        while (!stack.isEmpty()) {
            sum += stack.pop();
        }

        System.out.println(sum);

    }
}
