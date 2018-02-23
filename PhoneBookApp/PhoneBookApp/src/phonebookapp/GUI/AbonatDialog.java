package phonebookapp.GUI;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import javax.swing.ImageIcon;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.RowFilter;
import javax.swing.Timer;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableRowSorter;
import phonebookapp.Abonat;
import phonebookapp.CarteDeTelefon;
import static phonebookapp.CarteDeTelefon.agendaList;
import static phonebookapp.CarteDeTelefon.cnpList;
import static phonebookapp.CarteDeTelefon.fileToOpen;
import static phonebookapp.CarteDeTelefon.rowCount;
import phonebookapp.NrTel;

/**
 *
 * @author cosmin.panzariuc
 */
public class AbonatDialog extends javax.swing.JDialog {

    int nextAdvertising = 0;
    Timer timer; //folosit pentru zona de reclame

    public AbonatDialog(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();
        initAdvertising();
    }

    public final void initAdvertising() {//initializare zona pentru reclame
        advertisingArea.setIcon(new ImageIcon("src/phonebookapp/GUI/reclama1.jpg"));
        advertisingArea.setHorizontalAlignment(JLabel.CENTER);
        timer = new Timer(3000, new Listener());
        timer.start();
    }

    class Listener implements ActionListener {//implementare timer pentru rulare reclame

        public void actionPerformed(ActionEvent e) {
            if (nextAdvertising < 5) {
                nextAdvertising++;
            } else {
                nextAdvertising = 1;
            }
            advertisingArea.setIcon(new ImageIcon("src/phonebookapp/GUI/reclama" + nextAdvertising + ".jpg"));
        }
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        sortingGroup = new javax.swing.ButtonGroup();
        aboutDialog = new javax.swing.JDialog();
        jScrollPane2 = new javax.swing.JScrollPane();
        textAreaAbout = new javax.swing.JTextArea();
        changeTableValues = new javax.swing.JDialog();
        modificaAbonat = new javax.swing.JButton();
        anuleazaOperatie = new javax.swing.JButton();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        changeNume = new javax.swing.JTextField();
        changePrenume = new javax.swing.JTextField();
        changeCNP = new javax.swing.JTextField();
        changeNrTel = new javax.swing.JTextField();
        searchWindow = new javax.swing.JDialog();
        searchField = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        txtNume = new javax.swing.JTextField();
        txtPrenume = new javax.swing.JTextField();
        txtCNP = new javax.swing.JTextField();
        txtNrTel = new javax.swing.JTextField();
        btnOk = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        phoneBookTable = new javax.swing.JTable();
        sortByNume = new javax.swing.JRadioButton();
        sortByPrenume = new javax.swing.JRadioButton();
        jLabel5 = new javax.swing.JLabel();
        btnDelete = new javax.swing.JButton();
        sortByCNP = new javax.swing.JRadioButton();
        sortByTelefon = new javax.swing.JRadioButton();
        mainSearchField = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        advertisingArea = new javax.swing.JLabel();
        btnModif = new javax.swing.JButton();
        menuBar = new javax.swing.JMenuBar();
        fileMenu = new javax.swing.JMenu();
        openItem = new javax.swing.JMenuItem();
        saveItem = new javax.swing.JMenuItem();
        jSeparator1 = new javax.swing.JPopupMenu.Separator();
        exitItem = new javax.swing.JMenuItem();
        abonatiMenu = new javax.swing.JMenu();
        adaugaItem = new javax.swing.JMenuItem();
        cautaItem = new javax.swing.JMenuItem();
        modificaItem = new javax.swing.JMenuItem();
        stergeItem = new javax.swing.JMenuItem();
        helpMenu = new javax.swing.JMenu();
        inregistrareItem = new javax.swing.JMenuItem();
        jSeparator2 = new javax.swing.JPopupMenu.Separator();
        aboutItem = new javax.swing.JMenuItem();

        aboutDialog.setTitle("About...");
        aboutDialog.setModal(true);
        aboutDialog.getContentPane().setLayout(new java.awt.GridLayout(1, 0));

        textAreaAbout.setEditable(false);
        textAreaAbout.setColumns(20);
        textAreaAbout.setRows(5);
        textAreaAbout.setText("Aveti probleme cu numerele de telefon care sunt scrise prin diferite agende ? \nDoriti sa gasiti rapid informatiile despre o anumita persoana ? \nSolutia este folosirea acestei agende pentru numerele de telefon care poate stoca sute de \ninregistrari si care dispune de o interfata grafica foarte usor de utilizat.\n\n@author COSMIN PANZARIUC - Experienced Software Developer");
        jScrollPane2.setViewportView(textAreaAbout);

        aboutDialog.getContentPane().add(jScrollPane2);

        changeTableValues.setTitle("Modifica Abonat");

        modificaAbonat.setText("Modifica");
        modificaAbonat.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                modificaAbonatActionPerformed(evt);
            }
        });

        anuleazaOperatie.setText("Anuleaza");
        anuleazaOperatie.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                anuleazaOperatieActionPerformed(evt);
            }
        });

        jLabel7.setText("Nume:");

        jLabel8.setText("Prenume:");

        jLabel9.setText("CNP:");

        jLabel10.setText("Numar de telefon:");

        changeNume.setToolTipText("Modifica nume Abonat");
        changeNume.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                changeNumeKeyTyped(evt);
            }
        });

        changePrenume.setToolTipText("Modifica prenume Abonat");
        changePrenume.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                changePrenumeKeyTyped(evt);
            }
        });

        changeCNP.setToolTipText("Modifica CNP Abonat");
        changeCNP.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                changeCNPKeyTyped(evt);
            }
        });

        changeNrTel.setToolTipText("Modifica numar de telefon");
        changeNrTel.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                changeNrTelKeyTyped(evt);
            }
        });

        javax.swing.GroupLayout changeTableValuesLayout = new javax.swing.GroupLayout(changeTableValues.getContentPane());
        changeTableValues.getContentPane().setLayout(changeTableValuesLayout);
        changeTableValuesLayout.setHorizontalGroup(
            changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(changeTableValuesLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel8)
                    .addComponent(jLabel7)
                    .addComponent(jLabel9)
                    .addComponent(jLabel10))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 29, Short.MAX_VALUE)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(changeNrTel)
                    .addGroup(changeTableValuesLayout.createSequentialGroup()
                        .addGap(1, 1, 1)
                        .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(changeNume)
                            .addComponent(changePrenume)
                            .addComponent(changeCNP, javax.swing.GroupLayout.PREFERRED_SIZE, 162, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addContainerGap())
            .addGroup(changeTableValuesLayout.createSequentialGroup()
                .addGap(52, 52, 52)
                .addComponent(modificaAbonat)
                .addGap(31, 31, 31)
                .addComponent(anuleazaOperatie)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        changeTableValuesLayout.setVerticalGroup(
            changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, changeTableValuesLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(changeNume, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel7))
                .addGap(18, 18, 18)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(changePrenume, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel8))
                .addGap(21, 21, 21)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(changeCNP, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel9))
                .addGap(17, 17, 17)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(changeNrTel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel10))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(changeTableValuesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(modificaAbonat)
                    .addComponent(anuleazaOperatie))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        searchWindow.setTitle("Cauta / Filtreaza");
        searchWindow.setAlwaysOnTop(true);

        searchField.setToolTipText("Filtreaza dupa oricare din cele 4 criterii: nume, prenume, CNP, numar de telefon.");
        searchField.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                searchFieldFocusLost(evt);
            }
        });
        searchField.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                searchFieldKeyTyped(evt);
            }
        });

        javax.swing.GroupLayout searchWindowLayout = new javax.swing.GroupLayout(searchWindow.getContentPane());
        searchWindow.getContentPane().setLayout(searchWindowLayout);
        searchWindowLayout.setHorizontalGroup(
            searchWindowLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(searchField, javax.swing.GroupLayout.DEFAULT_SIZE, 400, Short.MAX_VALUE)
        );
        searchWindowLayout.setVerticalGroup(
            searchWindowLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(searchWindowLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(searchField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("PhoneBookApplication by Cosmin Panzariuc");
        setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));

        jLabel1.setText("Nume:");

        jLabel2.setText("Prenume:");

        jLabel3.setText("CNP:");

        jLabel4.setText("Numar telefon:");

        txtNume.setToolTipText("Nume abonat");
        txtNume.setFocusCycleRoot(true);
        txtNume.setNextFocusableComponent(txtPrenume);
        txtNume.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                txtNumeKeyTyped(evt);
            }
        });

        txtPrenume.setToolTipText("Prenume abonat");
        txtPrenume.setNextFocusableComponent(txtCNP);
        txtPrenume.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                txtPrenumeKeyTyped(evt);
            }
        });

        txtCNP.setToolTipText("CNP abonat");
        txtCNP.setNextFocusableComponent(txtNrTel);
        txtCNP.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                txtCNPKeyTyped(evt);
            }
        });

        txtNrTel.setToolTipText("Numar de telefon abonat");
        txtNrTel.setNextFocusableComponent(sortByNume);
        txtNrTel.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                txtNrTelKeyTyped(evt);
            }
        });

        btnOk.setText("Adauga Abonat");
        btnOk.setToolTipText("Apasa acest buton pentru a adauga noul abonat in baza de date.");
        btnOk.setNextFocusableComponent(btnDelete);
        btnOk.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnOkActionPerformed(evt);
            }
        });

        phoneBookTable.setBorder(new javax.swing.border.MatteBorder(null));
        phoneBookTable.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "Nume", "Prenume", "CNP", "Numar de telefon"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        phoneBookTable.setToolTipText("Tabel Abonati");
        phoneBookTable.getTableHeader().setReorderingAllowed(false);
        phoneBookTable.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                phoneBookTableMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(phoneBookTable);
        if (phoneBookTable.getColumnModel().getColumnCount() > 0) {
            phoneBookTable.getColumnModel().getColumn(0).setResizable(false);
            phoneBookTable.getColumnModel().getColumn(1).setResizable(false);
            phoneBookTable.getColumnModel().getColumn(2).setResizable(false);
            phoneBookTable.getColumnModel().getColumn(3).setResizable(false);
        }

        sortingGroup.add(sortByNume);
        sortByNume.setText("Nume");
        sortByNume.setToolTipText("Ordoneaza dupa Nume");
        sortByNume.setNextFocusableComponent(sortByPrenume);
        sortByNume.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sortByNumeActionPerformed(evt);
            }
        });

        sortingGroup.add(sortByPrenume);
        sortByPrenume.setText("Prenume");
        sortByPrenume.setToolTipText("Ordoneaza dupa Prenume");
        sortByPrenume.setNextFocusableComponent(sortByCNP);
        sortByPrenume.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sortByPrenumeActionPerformed(evt);
            }
        });

        jLabel5.setText("Ordoneaza dupa:");

        btnDelete.setText("Sterge Abonat");
        btnDelete.setToolTipText("Apasa acest buton pentru a sterge abonatul selectat din baza de date.");
        btnDelete.setNextFocusableComponent(phoneBookTable);
        btnDelete.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnDeleteActionPerformed(evt);
            }
        });

        sortingGroup.add(sortByCNP);
        sortByCNP.setText("CNP");
        sortByCNP.setToolTipText("Ordoneaza dupa Codul Numeric Personal");
        sortByCNP.setNextFocusableComponent(sortByTelefon);
        sortByCNP.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sortByCNPActionPerformed(evt);
            }
        });

        sortingGroup.add(sortByTelefon);
        sortByTelefon.setText("Numar de telefon");
        sortByTelefon.setToolTipText("Ordoneaza numarul de telefon");
        sortByTelefon.setNextFocusableComponent(btnOk);
        sortByTelefon.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sortByTelefonActionPerformed(evt);
            }
        });

        mainSearchField.setToolTipText("Filtreaza dupa oricare din cele 4 criterii: nume, prenume, CNP, numar de telefon.");
        mainSearchField.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                mainSearchFieldKeyTyped(evt);
            }
        });

        jLabel6.setText("Cauta / Filtreaza");

        btnModif.setText("Modifica Abonat");
        btnModif.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnModifActionPerformed(evt);
            }
        });

        fileMenu.setMnemonic('F');
        fileMenu.setText("File");
        fileMenu.setToolTipText("File");

        openItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_O, java.awt.event.InputEvent.CTRL_MASK));
        openItem.setMnemonic('o');
        openItem.setText("Open");
        openItem.setEnabled(false);
        openItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                openItemActionPerformed(evt);
            }
        });
        fileMenu.add(openItem);

        saveItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_S, java.awt.event.InputEvent.CTRL_MASK));
        saveItem.setMnemonic('s');
        saveItem.setText("Save");
        saveItem.setEnabled(false);
        saveItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                saveItemActionPerformed(evt);
            }
        });
        fileMenu.add(saveItem);
        fileMenu.add(jSeparator1);

        exitItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_I, java.awt.event.InputEvent.CTRL_MASK));
        exitItem.setMnemonic('i');
        exitItem.setText("Iesire");
        exitItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                exitItemActionPerformed(evt);
            }
        });
        fileMenu.add(exitItem);

        menuBar.add(fileMenu);

        abonatiMenu.setMnemonic('A');
        abonatiMenu.setText("Abonati");
        abonatiMenu.setToolTipText("Abonati");

        adaugaItem.setMnemonic('a');
        adaugaItem.setText("Adauga");
        adaugaItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                adaugaItemActionPerformed(evt);
            }
        });
        abonatiMenu.add(adaugaItem);

        cautaItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_F, java.awt.event.InputEvent.CTRL_MASK));
        cautaItem.setMnemonic('c');
        cautaItem.setText("Filtreaza");
        cautaItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cautaItemActionPerformed(evt);
            }
        });
        abonatiMenu.add(cautaItem);

        modificaItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_M, java.awt.event.InputEvent.CTRL_MASK));
        modificaItem.setText("Modifica");
        modificaItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                modificaItemActionPerformed(evt);
            }
        });
        abonatiMenu.add(modificaItem);

        stergeItem.setMnemonic('s');
        stergeItem.setText("Sterge");
        stergeItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                stergeItemActionPerformed(evt);
            }
        });
        abonatiMenu.add(stergeItem);

        menuBar.add(abonatiMenu);

        helpMenu.setMnemonic('H');
        helpMenu.setText("Help");
        helpMenu.setToolTipText("Help");

        inregistrareItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_ENTER, java.awt.event.InputEvent.CTRL_MASK));
        inregistrareItem.setMnemonic('i');
        inregistrareItem.setText("Inregistrare");
        inregistrareItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inregistrareItemActionPerformed(evt);
            }
        });
        helpMenu.add(inregistrareItem);
        helpMenu.add(jSeparator2);

        aboutItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_A, java.awt.event.InputEvent.SHIFT_MASK | java.awt.event.InputEvent.CTRL_MASK));
        aboutItem.setMnemonic('a');
        aboutItem.setText("About");
        aboutItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                aboutItemActionPerformed(evt);
            }
        });
        helpMenu.add(aboutItem);

        menuBar.add(helpMenu);

        setJMenuBar(menuBar);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(32, 32, 32)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel1)
                    .addComponent(jLabel2)
                    .addComponent(jLabel3)
                    .addComponent(jLabel4))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(btnOk)
                        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(txtCNP, javax.swing.GroupLayout.DEFAULT_SIZE, 370, Short.MAX_VALUE)
                            .addComponent(txtPrenume)
                            .addComponent(txtNume)
                            .addComponent(txtNrTel, javax.swing.GroupLayout.Alignment.TRAILING))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel5)
                            .addComponent(sortByPrenume)
                            .addComponent(sortByNume)
                            .addComponent(sortByCNP)
                            .addComponent(sortByTelefon))
                        .addGap(19, 19, 19))))
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 613, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(17, 17, 17)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(btnDelete)
                                .addGap(18, 18, 18)
                                .addComponent(btnModif))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel6)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(mainSearchField, javax.swing.GroupLayout.PREFERRED_SIZE, 366, javax.swing.GroupLayout.PREFERRED_SIZE))))
                    .addComponent(advertisingArea, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(29, 29, 29)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtNume, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel1))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtPrenume, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel2))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtCNP, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel3))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtNrTel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel4)))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel5)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(sortByNume)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(sortByPrenume)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(sortByCNP)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(sortByTelefon)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnDelete)
                    .addComponent(btnOk)
                    .addComponent(btnModif))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(mainSearchField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel6))
                .addGap(26, 26, 26)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(advertisingArea, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    String query;
    static public String currentAbonatNume;
    static public String currentAbonatPrenume;
    static public String currentAbonatCNP;
    static public String currentAbonatNrTel;

    //functie pentru apasarea butonului "Adauga Abonat"
    private void btnOkActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnOkActionPerformed
        currentAbonatNume = txtNume.getText();
        currentAbonatPrenume = txtPrenume.getText();
        currentAbonatCNP = txtCNP.getText();
        currentAbonatNrTel = txtNrTel.getText();
        DefaultTableModel model = (DefaultTableModel) phoneBookTable.getModel();

        if (currentAbonatNume.length() == 0 || currentAbonatPrenume.length() == 0 || currentAbonatCNP.length() == 0 || currentAbonatNrTel.length() == 0) { //validare la campuri necompletate
            JOptionPane.showMessageDialog(null, "Va rugam sa nu lasati campuri necompletate!", "Eroare campuri invalide", JOptionPane.ERROR_MESSAGE);
            return;
        } else {

            if (currentAbonatCNP.length() != 13) {// validare a CNP dpdv nr caractere
                JOptionPane.showMessageDialog(null, "CNP-ul trebuie sa aiba 13 cifre!", "CNP invalid", JOptionPane.ERROR_MESSAGE);
                return;
            }

            if (currentAbonatNrTel.length() != 10) {// validare a CNP dpdv nr caractere
                JOptionPane.showMessageDialog(null, "Numarul de telefon trebuie sa aiba 10 cifre!", "Numar de telefon invalid", JOptionPane.ERROR_MESSAGE);
                return;
            }
            if (cnpList.indexOf(currentAbonatCNP) < 0) {
                model.addRow(new Object[]{currentAbonatNume, currentAbonatPrenume, currentAbonatCNP, currentAbonatNrTel});
                txtNume.setText("");
                txtPrenume.setText("");
                txtCNP.setText("");
                txtNrTel.setText("");
            }
        }
        CarteDeTelefon.adaugaAbonat();
    }//GEN-LAST:event_btnOkActionPerformed

    //in campul numarului de telefon se pot introduce doar numere
    private void txtNrTelKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtNrTelKeyTyped
        char c = evt.getKeyChar();
        if (!(Character.isDigit(c) || c == KeyEvent.VK_BACK_SPACE || c == KeyEvent.VK_DELETE)) {
            evt.consume();
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_txtNrTelKeyTyped

    //in campul CNP se pot introduce doar numere
    private void txtCNPKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtCNPKeyTyped
        char c = evt.getKeyChar();
        if (!(Character.isDigit(c) || c == KeyEvent.VK_BACK_SPACE || c == KeyEvent.VK_DELETE)) {
            evt.consume();
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_txtCNPKeyTyped

    //in campul numelui se pot introduce doar majuscle
    private void txtNumeKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtNumeKeyTyped
        char c = evt.getKeyChar();
        if (Character.isLowerCase(c)) {
            evt.setKeyChar(Character.toUpperCase(evt.getKeyChar()));
        }
        if (Character.isDigit(c)) {
            evt.consume();
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_txtNumeKeyTyped

    //in campul prenumelui se pot introduce doar majuscle
    private void txtPrenumeKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtPrenumeKeyTyped
        char c = evt.getKeyChar();
        if (Character.isLowerCase(c)) {
            evt.setKeyChar(Character.toUpperCase(evt.getKeyChar()));
        }
        if (Character.isDigit(c)) {
            evt.consume();
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_txtPrenumeKeyTyped


    private void sortByPrenumeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sortByPrenumeActionPerformed
        CarteDeTelefon.sortTableContentsByPrenume();
        rearangeItems();
    }//GEN-LAST:event_sortByPrenumeActionPerformed

    private void sortByNumeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sortByNumeActionPerformed
        CarteDeTelefon.sortTableContentsByNume();
        rearangeItems();
    }//GEN-LAST:event_sortByNumeActionPerformed

    //functie pentru apasarea butonului "Sterge Abonat"
    private void btnDeleteActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnDeleteActionPerformed
        if (CarteDeTelefon.rowIndex >= 0) { //validare a stergerii doar daca a fost selectata o inregistrare din tabel
            int deleteElement = JOptionPane.showConfirmDialog(null, "Doriti sa stergeti inregistrarea selectata ?", "Sterge", JOptionPane.YES_NO_OPTION);
            if (deleteElement == 0) {
                DefaultTableModel model = (DefaultTableModel) phoneBookTable.getModel();
                model.removeRow(phoneBookTable.getSelectedRow());
                CarteDeTelefon.stergeAbonat();
                CarteDeTelefon.rowIndex = -1;
                rowCount--;
            }

        } else {
            JOptionPane.showMessageDialog(null, "Selectati una dintre inregistrari, apoi apasati butonul 'Sterge Abonat'!", "Sterge Abonat", JOptionPane.WARNING_MESSAGE);
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_btnDeleteActionPerformed


    private void phoneBookTableMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_phoneBookTableMouseClicked
        int positionRow = phoneBookTable.getSelectedRow();
        CarteDeTelefon.rowIndex = positionRow;
    }//GEN-LAST:event_phoneBookTableMouseClicked

    private void sortByCNPActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sortByCNPActionPerformed
        CarteDeTelefon.sortTableContentsByCNP();
        rearangeItems();
    }//GEN-LAST:event_sortByCNPActionPerformed

    private void sortByTelefonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sortByTelefonActionPerformed
        CarteDeTelefon.sortTableContentsByTelefon();
        rearangeItems();
    }//GEN-LAST:event_sortByTelefonActionPerformed


    private void exitItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_exitItemActionPerformed
        int exitApp = JOptionPane.showConfirmDialog(null, "Doriti sa Parasiti aplicatia ?", "Exit", JOptionPane.YES_NO_OPTION);
        if (exitApp == 0) {
            System.exit(0);
        }
    }//GEN-LAST:event_exitItemActionPerformed

    private void aboutItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_aboutItemActionPerformed
        aboutDialog.setTitle("About...");
        aboutDialog.setResizable(false);
        aboutDialog.setSize(550, 160);
        aboutDialog.setLocationRelativeTo(null);
        aboutDialog.setVisible(true);
    }//GEN-LAST:event_aboutItemActionPerformed

    private void adaugaItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_adaugaItemActionPerformed
        btnOkActionPerformed(evt);
        txtNume.requestFocus();
    }//GEN-LAST:event_adaugaItemActionPerformed

    private void stergeItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_stergeItemActionPerformed
        btnDeleteActionPerformed(evt);
    }//GEN-LAST:event_stergeItemActionPerformed

    private void openItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_openItemActionPerformed
        final JFileChooser fc = new JFileChooser();
        int response = fc.showOpenDialog(openItem);
        if (response == JFileChooser.APPROVE_OPTION) {
            CarteDeTelefon.fileToOpen = fc.getSelectedFile().toString();
            loadFromExternalFile();
        }
    }//GEN-LAST:event_openItemActionPerformed

    public void loadFromExternalFile() {//deschide un fisier salvat anterior de utilizator
        try {
            ObjectInputStream ois = new ObjectInputStream(new FileInputStream(fileToOpen));
            Object obj = ois.readObject();
            agendaList = (ArrayList<Abonat>) obj;
            DefaultTableModel model = (DefaultTableModel) phoneBookTable.getModel();
            
        for (int i = rowCount - 1; i >= 0; i--) {
            model.removeRow(i);
            cnpList.remove(i);
            CarteDeTelefon.nrTelList.remove(i);
        }
            
            for (Abonat a : CarteDeTelefon.agendaList) {
                model.addRow(new Object[]{a.getNume(), a.getPrenume(), a.getCNP(), a.getNumarTelefon()});
                cnpList.add(a.getCNP());
                NrTel.nrTelList.add(a.getNumarTelefon());
            }
            CarteDeTelefon.rowCount = 0;
        } catch (Exception e) {

        }
    }


    private void cautaItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cautaItemActionPerformed
        searchWindow.setResizable(false);
        searchWindow.setModal(true);
        searchWindow.setLocationRelativeTo(null);
        searchWindow.setSize(300, 70);
        searchWindow.setVisible(true);
    }//GEN-LAST:event_cautaItemActionPerformed

    //la filtrarea informatiilor din tabel - caseta de input va permite doar majuscule iar butoanele radio
    private void searchFieldKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_searchFieldKeyTyped
        char c = evt.getKeyChar();
        if (Character.isLowerCase(c)) {
            evt.setKeyChar(Character.toUpperCase(evt.getKeyChar()));
        }
        query = searchField.getText();
        filterData(query);
    }//GEN-LAST:event_searchFieldKeyTyped

    //la pierderea focusului tabelul revine la starea de dinainte de filtrare
    private void searchFieldFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_searchFieldFocusLost
        searchField.setText("");
        query = searchField.getText();
        filterData(query);
    }//GEN-LAST:event_searchFieldFocusLost

    private void mainSearchFieldKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_mainSearchFieldKeyTyped
        char c = evt.getKeyChar();
        if (Character.isLowerCase(c)) {
            evt.setKeyChar(Character.toUpperCase(evt.getKeyChar()));
        }
        String query_field = mainSearchField.getText();
        DefaultTableModel dtm = (DefaultTableModel) phoneBookTable.getModel();
        TableRowSorter<DefaultTableModel> trs = new TableRowSorter<DefaultTableModel>(dtm);
        phoneBookTable.setRowSorter(trs);
        trs.setRowFilter(RowFilter.regexFilter(query_field));

        if (query_field.equals("")) { //in cazul filtrarii din fereastra principala - sortarile sunt dezactivate
            sortByNume.setEnabled(true);
            sortByPrenume.setEnabled(true);
            sortByCNP.setEnabled(true);
            sortByTelefon.setEnabled(true);
            cautaItem.setEnabled(true);
        } else {
            sortByNume.setEnabled(false);
            sortByPrenume.setEnabled(false);
            sortByCNP.setEnabled(false);
            sortByTelefon.setEnabled(false);
            cautaItem.setEnabled(false);
        }

    }//GEN-LAST:event_mainSearchFieldKeyTyped

    //autentificare aplicatie pentru activarea optiunilor Open / Save
    private void inregistrareItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inregistrareItemActionPerformed
        String validationInput = JOptionPane.showInputDialog(null, "Va rugam sa introduceti codul de inregistrare: ");
        if (validationInput != null) {
            if (validationInput.equals("Infoacademy")) {
                inregistrareItem.setEnabled(false);
                openItem.setEnabled(true);
                saveItem.setEnabled(true);
                JOptionPane.showMessageDialog(null, "Autentificarea a fost efectuata cu succes!");
                advertisingArea.setVisible(false);
                timer.stop();
            } else {
                JOptionPane.showMessageDialog(null, "Autentificare esuata! Codul de inregistrare nu este corect!");
            }
        }
    }//GEN-LAST:event_inregistrareItemActionPerformed

//Salvare agenda la click pe butonul de Save
    private void saveItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_saveItemActionPerformed
        if (!CarteDeTelefon.isSaved) {
            CarteDeTelefon.isSaved = true;
            final JFileChooser fc = new JFileChooser();
            int response = fc.showSaveDialog(saveItem);
            if (response == JFileChooser.APPROVE_OPTION) {
                CarteDeTelefon.fileToSave = fc.getSelectedFile().toString();
                CarteDeTelefon.saveData();
                JOptionPane.showMessageDialog(null, "Fisierul a fost salvat cu succes!" + "\n" + "Locatie: " + CarteDeTelefon.fileToSave + "!");
                saveAtFiveMinutes();
            }
        } else {
            CarteDeTelefon.saveData();
            JOptionPane.showMessageDialog(null, "Fisierul a fost salvat cu succes!" + "\n" + "Locatie: " + CarteDeTelefon.fileToSave + "!");
        }
    }//GEN-LAST:event_saveItemActionPerformed

 
    private void btnModifActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnModifActionPerformed
        if(CarteDeTelefon.rowIndex < 0){
             JOptionPane.showMessageDialog(null, "Va rugam sa selectati inregistrarea pe care doriti sa o modificati, apoi introduceti noile valori", "Modifica Abonat", JOptionPane.WARNING_MESSAGE);
        }else{
            changeTableValues.setResizable(false);
            changeTableValues.setModal(true);
            changeTableValues.setLocation(300, 100);
            changeTableValues.setSize(300, 270);
            changeTableValues.setVisible(true);
        }
        sortingGroup.clearSelection();
    }//GEN-LAST:event_btnModifActionPerformed

    private void changeNumeKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_changeNumeKeyTyped
        txtNumeKeyTyped(evt);
    }//GEN-LAST:event_changeNumeKeyTyped

    private void changePrenumeKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_changePrenumeKeyTyped
        txtPrenumeKeyTyped(evt);
    }//GEN-LAST:event_changePrenumeKeyTyped

    private void changeCNPKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_changeCNPKeyTyped
        txtCNPKeyTyped(evt);
    }//GEN-LAST:event_changeCNPKeyTyped

    private void changeNrTelKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_changeNrTelKeyTyped
        txtNrTelKeyTyped(evt);
    }//GEN-LAST:event_changeNrTelKeyTyped

    private void anuleazaOperatieActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_anuleazaOperatieActionPerformed
        changeNume.setText("");
        changePrenume.setText("");
        changeCNP.setText("");
        changeNrTel.setText("");
        changeTableValues.setVisible(false);
    }//GEN-LAST:event_anuleazaOperatieActionPerformed

    //modificare tabel de Abonati si arrayList-uri
    private void modificaAbonatActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_modificaAbonatActionPerformed
        if(changeNume.getText().equals("") && changePrenume.getText().equals("") && changeCNP.getText().equals("") && changeNrTel.getText().equals("")){
             JOptionPane.showMessageDialog(null, "Va rugam sa nu lasati campuri necompletate!", "Eroare campuri invalide", JOptionPane.ERROR_MESSAGE);
        }else if(changeCNP.getText().length() != 13 && changeCNP.getText().length() != 0 ){
            JOptionPane.showMessageDialog(null, "CNP-ul trebuie sa aiba 13 cifre!", "CNP invalid", JOptionPane.ERROR_MESSAGE);
        }else if (changeNrTel.getText().length() != 10 && changeNrTel.getText().length() != 0){
            JOptionPane.showMessageDialog(null, "Numarul de telefon trebuie sa aiba 10 cifre!", "Numar de telefon invalid", JOptionPane.ERROR_MESSAGE);
        }else{
            if(!changeNume.getText().equals("")){
                phoneBookTable.setValueAt(changeNume.getText(), CarteDeTelefon.rowIndex, 0);  
                agendaList.get(CarteDeTelefon.rowIndex).setNume(changeNume.getText());
            } 

            if(!changePrenume.getText().equals("")){
                phoneBookTable.setValueAt(changePrenume.getText(), CarteDeTelefon.rowIndex, 1);
                agendaList.get(CarteDeTelefon.rowIndex).setPrenume(changePrenume.getText());
            } 

            if(!changeCNP.getText().equals("")){
                if (cnpList.indexOf(changeCNP.getText()) >= 0) {
                    JOptionPane.showMessageDialog(null, "ATENTIE - CNP-ul exista deja in baza de date!", "CNP duplicat", JOptionPane.ERROR_MESSAGE);
                    return;
                }else{
                    cnpList.set(CarteDeTelefon.rowIndex, changeCNP.getText());
                    agendaList.get(CarteDeTelefon.rowIndex).setCNP(changeCNP.getText());
                    phoneBookTable.setValueAt(changeCNP.getText(), CarteDeTelefon.rowIndex, 2); 
                }
            }

            if(!changeNrTel.getText().equals("")){
                if (NrTel.nrTelList.indexOf(changeNrTel.getText()) >= 0) {
                    JOptionPane.showMessageDialog(null, "Numarul de telefon exista deja in baza de date! Va rugam sa verificati veridicitatea informatiei de contact, apoi sa faceti modificari daca este necesar!");
                }
                phoneBookTable.setValueAt(changeNrTel.getText(), CarteDeTelefon.rowIndex, 3);
                agendaList.get(CarteDeTelefon.rowIndex).setNumarTelefon(changeNrTel.getText());
                CarteDeTelefon.nrTelList.set(CarteDeTelefon.rowIndex, changeNrTel.getText());
            }
            changeNume.setText("");
            changePrenume.setText("");
            changeCNP.setText("");
            changeNrTel.setText("");
            changeTableValues.setVisible(false);
            JOptionPane.showMessageDialog(null, "Informatiile au fost actualizate cu succes!");
        }
    }//GEN-LAST:event_modificaAbonatActionPerformed

    private void modificaItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_modificaItemActionPerformed
        btnModifActionPerformed(evt);
    }//GEN-LAST:event_modificaItemActionPerformed

    
    private void saveAtFiveMinutes() {//Timer care salveaza datele in fisier extern, odata la 5 minute
        Timer saveTimer = new Timer(300000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                CarteDeTelefon.saveData();
            }

        });
        saveTimer.start();
    }

    //rearanjarea liniilor tabelului in cazul sortarii dupa un anumit criteriu
    private void rearangeItems() {
        DefaultTableModel model = (DefaultTableModel) phoneBookTable.getModel();
        CarteDeTelefon.rowCount = phoneBookTable.getRowCount();
        for (int i = rowCount - 1; i >= 0; i--) {
            model.removeRow(i);
            model.addRow(new Object[]{CarteDeTelefon.agendaList.get(i).getNume(), CarteDeTelefon.agendaList.get(i).getPrenume(), CarteDeTelefon.agendaList.get(i).getCNP(), CarteDeTelefon.agendaList.get(i).getNumarTelefon()});
        }
    }

    //functie de filtrare printre inregistrarile tabelului
    private void filterData(String query) {
        DefaultTableModel dm;
        dm = (DefaultTableModel) phoneBookTable.getModel();
        TableRowSorter<DefaultTableModel> tr = new TableRowSorter<DefaultTableModel>(dm);
        phoneBookTable.setRowSorter(tr);
        if (!searchField.equals("")) {
            tr.setRowFilter(RowFilter.regexFilter(query));
        } else {
            tr.removeRowSorterListener(phoneBookTable);
        }
    }

    public static void main(String args[]) {
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(AbonatDialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(AbonatDialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(AbonatDialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(AbonatDialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }

        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {//aparitie splash screen

                try {
                    Thread.sleep(2000);
                } catch (Exception e) {

                }

                AbonatDialog dialog = new AbonatDialog(new javax.swing.JFrame(), true);
                dialog.addWindowListener(new java.awt.event.WindowAdapter() {
                    @Override
                    public void windowClosing(java.awt.event.WindowEvent e) {
                        System.exit(0);
                    }
                });
                dialog.setLocationRelativeTo(null);
                dialog.setResizable(false);
                dialog.setVisible(true);
            }
        });
    }

    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenu abonatiMenu;
    private javax.swing.JDialog aboutDialog;
    private javax.swing.JMenuItem aboutItem;
    private javax.swing.JMenuItem adaugaItem;
    private javax.swing.JLabel advertisingArea;
    private javax.swing.JButton anuleazaOperatie;
    private javax.swing.JButton btnDelete;
    private javax.swing.JButton btnModif;
    private javax.swing.JButton btnOk;
    private javax.swing.JMenuItem cautaItem;
    private javax.swing.JTextField changeCNP;
    private javax.swing.JTextField changeNrTel;
    private javax.swing.JTextField changeNume;
    private javax.swing.JTextField changePrenume;
    private javax.swing.JDialog changeTableValues;
    private javax.swing.JMenuItem exitItem;
    private javax.swing.JMenu fileMenu;
    private javax.swing.JMenu helpMenu;
    private javax.swing.JMenuItem inregistrareItem;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JPopupMenu.Separator jSeparator1;
    private javax.swing.JPopupMenu.Separator jSeparator2;
    private javax.swing.JTextField mainSearchField;
    private javax.swing.JMenuBar menuBar;
    private javax.swing.JButton modificaAbonat;
    private javax.swing.JMenuItem modificaItem;
    private javax.swing.JMenuItem openItem;
    private javax.swing.JTable phoneBookTable;
    private javax.swing.JMenuItem saveItem;
    private javax.swing.JTextField searchField;
    private javax.swing.JDialog searchWindow;
    private javax.swing.JRadioButton sortByCNP;
    private javax.swing.JRadioButton sortByNume;
    private javax.swing.JRadioButton sortByPrenume;
    private javax.swing.JRadioButton sortByTelefon;
    private javax.swing.ButtonGroup sortingGroup;
    private javax.swing.JMenuItem stergeItem;
    private javax.swing.JTextArea textAreaAbout;
    private javax.swing.JTextField txtCNP;
    private javax.swing.JTextField txtNrTel;
    private javax.swing.JTextField txtNume;
    private javax.swing.JTextField txtPrenume;
    // End of variables declaration//GEN-END:variables
}
