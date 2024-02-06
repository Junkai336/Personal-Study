package exam.ch6;

public class Account {
    public static final int MIN_BALANCE = 0;
    public static final int MAX_BALANCE = 1000000;

    private String owner;
    private String number;
    private int balance;

    public Account() {}

    public Account(String owner, String number, int balance ) {
        this.balance = balance;
        this.owner = owner;
        this.number = number;
    }

    public int getBalance() {
        return balance;
    }

    public String getOwner() {
        return owner;
    }

    public String getNumber() {
        return number;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
