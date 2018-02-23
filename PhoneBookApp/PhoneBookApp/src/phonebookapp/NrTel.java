package phonebookapp;

import java.util.ArrayList;
import javax.swing.JOptionPane;
import phonebookapp.GUI.AbonatDialog;

public class NrTel {

    public static ArrayList<String> nrTelList = new ArrayList<String>(); //utilizat pentru a stoca numere de telefon 

    public static void checkForDuplicateNumbers() {
        if (nrTelList.indexOf(AbonatDialog.currentAbonatNrTel) >= 0) { //permite totusi duplicatele - dupa afisarea unui mesaj de atentionare
            JOptionPane.showMessageDialog(null, "Numarul de telefon exista deja in baza de date! Va rugam sa verificati veridicitatea informatiei de contact, apoi sa faceti modificari daca este necesar!");
        } else {
            nrTelList.add(AbonatDialog.currentAbonatNrTel);
        }
    }

    @Override
    public String toString() {
        return "NrTel{" + '}';
    }

}
