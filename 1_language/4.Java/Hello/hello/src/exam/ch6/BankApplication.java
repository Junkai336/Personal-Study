package exam.ch6;

import java.util.Arrays;
import java.util.Scanner;

public class BankApplication extends Bank {
    // 배열에 객체가 저장되는 걸까? -> 이 원리가 맞는 듯 함. 배열에 참조 타입의 변수를 저장하는 거니까
    // 배열[객체1, 객체2, 객체3 ...]
    private static Account accountArray[] = new Account[100];
    private static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) {

        // Account account = new Account();

        boolean run = true;

        while (run) {

            System.out.println("[계좌생성 실행 결과]");
            System.out.println("---------------------------------");
            System.out.println("1. 계좌생성 ㅣ 2. 계좌목록 ㅣ 3. 예금 ㅣ 4. 출금 ㅣ 5. 종료");
            System.out.println("---------------------------------");

            System.out.print("값을 입력해 주십시오: ");
            String select = scan.nextLine();

            switch (select) {
                case "1":
                    createAccount();
                    break;

                case "2":
                    listAccount();
                    break;

                case "3":
                    depositAccount();
                    break;

                case "4":
                    withdrawAccount();
                    break;

                case "5":
                    System.out.println("종료합니다.");
                    run = false;
                    return;

            }
        }

    }

    public static void createAccount() {

        System.out.print("계좌주 입력: ");
        String owner = scan.nextLine();
        System.out.print("계좌번호 입력: ");
        String number = scan.nextLine();
        System.out.print("현재잔고 입력: ");
        int balance = scan.nextInt();

        for (int i = 0; i < accountArray.length; i++) {
            if (accountArray[i] == null) {
                Account account = new Account(owner, number, balance);
                accountArray[i] = account;
                System.out.println("계좌가 생성되었습니다.");
                System.out.println("계좌주\t" + account.getOwner() + "  계좌번호\t" + account.getNumber() + "  잔고액\t"
                        + account.getBalance());
                break;
            }
        }

    }

    public static void listAccount() {
        for (int i = 0; i < accountArray.length; i++) {
            if (accountArray[i] == null) {
                break;
            } else {
                System.out.println("계좌주\t" + accountArray[i].getOwner() + "  계좌번호\t" + accountArray[i].getNumber()
                        + "  잔고액\t" + accountArray[i].getBalance());
            }
        }
    }

    public static void depositAccount() {
        System.out.print("찾을 계좌주 입력: ");
        String owner2 = scan.nextLine();

        
        for (int l = 0; l < accountArray.length; l++) {
            if (accountArray[l].getOwner().equals(owner2)) {
                Account account = accountArray[l];
                System.out.println("넣을 잔고액?: ");
                int balance = scan.nextInt();
                accountArray[l].setBalance(account.getBalance() + balance);
                System.out.println("계좌주\t" + accountArray[l].getOwner() + "  계좌번호\t" + accountArray[l].getNumber()
                        + "  잔고액\t" + accountArray[l].getBalance());
                return;
            }
        }
    }

    public static void withdrawAccount() {

    }
}
