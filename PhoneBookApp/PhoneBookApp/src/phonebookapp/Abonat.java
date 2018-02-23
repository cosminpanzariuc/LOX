package phonebookapp;

import java.io.Serializable;

public class Abonat extends NrTel implements Serializable {

    private String nume;
    private String prenume;
    private String CNP;
    private String numarTelefon;

    public Abonat(String nume, String prenume, String CNP, String numarTelefon) {
        this.nume = nume;
        this.prenume = prenume;
        this.CNP = CNP;
        this.numarTelefon = numarTelefon;
    }

    public String getNume() {
        return nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public String getCNP() {
        return CNP;
    }

    public String getNumarTelefon() {
        return numarTelefon;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public void setCNP(String CNP) {
        this.CNP = CNP;
    }

    public void setNumarTelefon(String numarTelefon) {
        this.numarTelefon = numarTelefon;
    }

    @Override
    public String toString() {
        return "Abonat{" + "nume=" + nume + ", prenume=" + prenume + ", CNP=" + CNP + ", numarTelefon=" + numarTelefon + '}';
    }

    public String[] toShow() {
        return new String[]{nume, prenume, CNP, numarTelefon};
    }

}
