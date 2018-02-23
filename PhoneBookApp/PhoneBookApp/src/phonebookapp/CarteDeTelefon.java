package phonebookapp;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import phonebookapp.GUI.AbonatDialog;

public class CarteDeTelefon extends Abonat {

    public static ArrayList<Abonat> agendaList = new ArrayList<>(); //utilizat pentru a stoca obiectele de tip Abonat (si implicit toate proprietatile lor)
    public static ArrayList<String> cnpList = new ArrayList<String>(); //utilizat pentru a verifica daca CNP-ul este unic
    public static int rowIndex = -1; // indexul randului din tabel pe care se da click
    public static int rowCount; //numarul de inregistrari prezente in tabel
    public static String fileToSave; //calea catre fisierul care va stoca toate obiectele de tip Abonat (pentru butonul Save)
    public static String fileToOpen; //calea catre fisierul care care va deschide obiectele de tip Abonat stocate (butonul Open)
    public static boolean isSaved = false; //variabila folosita pentru a sti daca a fost dat click pe butonul de Save

    public CarteDeTelefon(String nume, String prenume, String CNP, String numarTelefon) {
        super(nume, prenume, CNP, numarTelefon);
    }

    public enum sortByCriteria { //stocheaza singurele criterii de ordonare a abonatilor

        DUPA_NUME, DUPA_PRENUME, DUPA_CNP, DUPA_TELEFON;
    }

    public static void sortTableContentsByNume() {
        reorderEntrys(sortByCriteria.DUPA_NUME);
        Collections.reverse(agendaList);
    }

    public static void sortTableContentsByPrenume() {
        reorderEntrys(sortByCriteria.DUPA_PRENUME);
        Collections.reverse(agendaList);
    }

    public static void sortTableContentsByCNP() {
        reorderEntrys(sortByCriteria.DUPA_CNP);
        Collections.reverse(agendaList);
    }

    public static void sortTableContentsByTelefon() {
        reorderEntrys(sortByCriteria.DUPA_TELEFON);
        Collections.reverse(agendaList);
    }

    static void reorderEntrys(sortByCriteria c) { //reordoneaza inregistrarile din tabel in functie de criteriul ales de utilizator
        switch (c) {
            case DUPA_NUME:
                Comparator<Abonat> nameCriteria = new Comparator<Abonat>() {

                    @Override
                    public int compare(Abonat a1, Abonat a2) {
                        return a1.getNume().compareTo(a2.getNume());
                    }
                };
                Collections.sort(agendaList, nameCriteria);
                break;

            case DUPA_PRENUME:
                Comparator<Abonat> prenumeCriteria = new Comparator<Abonat>() {

                    @Override
                    public int compare(Abonat a1, Abonat a2) {
                        return a1.getPrenume().compareTo(a2.getPrenume());
                    }
                };
                Collections.sort(agendaList, prenumeCriteria);
                break;

            case DUPA_CNP:
                Comparator<Abonat> cnpCriteria = new Comparator<Abonat>() {

                    @Override
                    public int compare(Abonat a1, Abonat a2) {
                        return a1.getCNP().compareTo(a2.getCNP());
                    }
                };
                Collections.sort(agendaList, cnpCriteria);
                break;

            case DUPA_TELEFON:
                Comparator<Abonat> telefonCriteria = new Comparator<Abonat>() {

                    @Override
                    public int compare(Abonat a1, Abonat a2) {
                        return a1.getNumarTelefon().compareTo(a2.getNumarTelefon());
                    }
                };
                Collections.sort(agendaList, telefonCriteria);
                break;
        }
    }

    public static void adaugaAbonat() { //functie de adaugare abonat si proces validare in functie de CNP dublicat / numar de telefon duplicat
        Abonat currentAbonat = new Abonat(AbonatDialog.currentAbonatNume, AbonatDialog.currentAbonatPrenume, AbonatDialog.currentAbonatCNP, AbonatDialog.currentAbonatNrTel);

        if (cnpList.indexOf(AbonatDialog.currentAbonatCNP) < 0) {
            cnpList.add(AbonatDialog.currentAbonatCNP);
            NrTel.checkForDuplicateNumbers();
            agendaList.add(currentAbonat);
            rowCount++;
        } else {
            JOptionPane.showMessageDialog(null, "ATENTIE - CNP-ul exista deja in baza de date!", "CNP duplicat", JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void stergeAbonat() {//functie de stergere abonat
        Collections.reverse(agendaList);
        agendaList.remove(rowIndex);
        cnpList.remove(rowIndex);
        NrTel.nrTelList.remove(rowIndex);
    }

    public static void saveData() {//salveaza informatiile intr-un fisier extern declarat de utilizator
        try {
            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(fileToSave));
            oos.writeObject(agendaList);
            oos.close();
        } catch (IOException ex) {
            Logger.getLogger(CarteDeTelefon.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
