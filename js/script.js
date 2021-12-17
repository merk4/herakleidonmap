console.log('developed by Nikos Merkouris');
console.log('designed by Alexandros Papadakis');
console.log('All Rights Reserved © 2021');

//map init
var map = L.map('map' , {attributionControl: false}).setView([38.060,23.790], 12 , {tap:false} );
//L.control.attribution({prefix:' Developed by Nikos Merkouris / Designed by Alexandros Papadakis - 2021©'}).addTo(map);
//osm layer 
var osm = L.tileLayer('https://api.mapbox.com/styles/v1/herakleidonmap/ckv6v483y7zjj14s7o5rzaxn0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGVyYWtsZWlkb25tYXAiLCJhIjoiY2t1c2k0dHl4MTdtYTJvczdqNTltM2V2ZyJ9.e4bAo8MBc9xJ8WHROBox0g', {
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWVyazQiLCJhIjoiY2t1cjRob2RoMGdlbjMwbDBwZDFyc2puNyJ9.2ESqJcz9FAZp3bDlDxANCg'
});
osm.addTo(map);

var violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [23,39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [39, 39],
  opacity: 0.7
});

var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [23,39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [39, 39],
  opacity: 0.7
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [23,39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [39, 39],
  opacity: 0.7
});



//Groups

var pisiMarkers = L.markerClusterGroup();

var adrMarkers = L.markerClusterGroup();

var krinMarkers = L.markerClusterGroup();


var pisi2 = L.marker([37.972161, 23.721247],{
    title: "Εννεάκρουνος κρήνη",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Εννεάκρουνος κρήνη (6ο αι. π. Χ.)</h4> <p>Κατά  τη διάρκεια της διακυβέρνησης των Πεισιστρατιδών,  κατασκευάστηκε η Εννεάκρουνος Κρήνη για να διοχετευτεί το νερό της κρήνης Καλλιρόης. (Βαλαβάνης και άλλοι,2008).Όσον αφορά τη θέση που βρισκόταν η κρήνη, υπάρχουν αρκετές θεωρίες. Ωστόσο, η πιο αποδεκτή τοποθετεί την Εννεάκρουνο κοντά στον ποταμό  Ιλισό (ίσως στη διασταύρωση των οδών Καλλιρρόης και Αναπαύσεως). Μάλιστα, ορισμένες αρχαίες πηγές  φαίνεται να ταυτίζουν τις δύο κρήνες. Χαρακτηριστικό παράδειγμα αποτελεί και η σχετική αναφορά του Θουκυδίδη στο έργο του «Ιστορίαι»(ΙΙ 15.3-5). <br> <i>[2.15.5] καὶ τῇ κρήνῃ τῇ νῦν μὲν τῶν τυράννων οὕτω σκευασάντων Ἐννεακρούνῳ καλουμένῃ, τὸ δὲ πάλαι φανερῶν τῶν πηγῶν οὐσῶν Καλλιρρόῃ ὠνομασμένῃ, ἐκεῖνοί τε ἐγγὺς οὔσῃ τὰ πλείστου ἄξια ἐχρῶντο, καὶ νῦν ἔτι ἀπὸ τοῦ ἀρχαίου πρό τε γαμικῶν καὶ ἐς ἄλλα τῶν ἱερῶν νομίζεται τῷ ὕδατι χρῆσθαι·<br>[2.15.5] Και η βρύση που σήμερα ονομάζεται Εννεάκρουνος, από τα έργα που έκαναν οι Πεισιστρατίδες, ονομαζόταν άλλοτε Καλλιρόη, όταν ακόμα φαινόνταν οι πηγές. Την βρύση αυτή χρησιμοποιούσαν τότε για τις περισσότερες ανάγκες τους επειδή ήταν κοντά, αλλά και σήμερα ακόμα, κατάλοιπο της αρχαίας συνήθειας, χρησιμοποιούν το νερό της βρύσης και για τους γάμους και γι’  άλλες ιεροτελεστίες. </i></p> <img src="assets/img.webp" class="popimg" alt="krini">');


var pisi3 = L.marker([37.985774973421925, 23.801940826632602],{
    title: "Ιερά Μονή Θεολόγου",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Μονή Αγίου Ιωάννη Θεολόγου Παπάγου</h4> <p>Η διαδρομή του Πεισιστράτειου υδραγωγείου δεν έχει χαρτογραφηθεί πλήρως, ωστόσο έχουν έρθει στο φως αρκετά σημεία της διαδρομής του. Κάποια από αυτά  είναι η μονή του Αγίου Ιωάννη του Θεολόγου στις δυτικές παρυφές του Υμηττού,  αλλά και  παράπλευρα του παλαιού ναού του Αγίου Θωμά. Από εκεί συνέχιζε  στην οδό Παπαδιαμαντοπούλου, στον Εθνικό Κήπο και μέσω της οδού των Κυδαθηναίων εισερχόταν  στην παλιά Πόλη και προχωρούσε στην νότια πλευρά της Ακροπόλεως. Στη συνέχεια, κατευθυνόταν βόρεια, περνούσε από τον Άρειο Πάγο και κατέληγε στην Εννεάκρουνο Κρήνη, που ίσως ταυτιζόταν με την κρήνη Καλλιρόη. </p> <img src="assets/moniTheologou.webp" class="popimg" alt="Moni">');

var pisi4 = L.marker([37.972889777503184, 23.737338830608735],{
    title: "Εθνικός Κήπος",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Εθνικός Κήπος</h4> <p>Υδροδότηση του Εθνικού κήπου από το δίκτυο των Πεισιστρατιδών.</p> <img src="assets/kipos.webp" class="popimg" alt="kipos">');

var pisi5 = L.marker([37.980641388858935, 23.762294099204112],{
    title: "Οδός Παπαδιαμαντοπούλου",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Οδός Παπαδιαμαντοπούλου</h4> <p>Σωληνώσεις που καταλήγουν στον Εθνικό κήπο</p>');

var pisi6 = L.marker([37.97572965286372, 23.73568696282807],{
    title: "Σταθμός Μετρό «Σύνταγμα»",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Μονή Αγίου Ιωάννη Θεολόγου Παπάγου</h4> <p>Οι ανασκαφές που πραγματοποιήθηκαν κατά τη διάρκεια των έργων του Μετρό της Αθήνας, έφεραν στο φως κατάλοιπα του υδραγωγείου. Σήμερα, τμήματά τους , τα οποία χρονολογούνται στο α΄ μισό του 5ου αιώνα π.Χ., εκτίθενται στο σταθμό του Συντάγματος. Πιο συγκεκριμένα,  βρίσκονται προς έκθεση τρεις πήλινοι σωλήνες και  μία δεξαμενή του υδραγωγείου, ενώ τμήμα του αγωγού εντοπίζεται  και στην πλατεία, έξω από τον σταθμό.</p> <img src="assets/sintagma.webp" class="popimg" alt="sintagma">');

var pisi7 = L.marker([37.976391682290156, 23.747295898421186],{
    title: "Σταθμός Μετρό «Ευαγγελισμός»",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Σταθμός Μετρό «Ευαγγελισμός»</h4> <p>Κατάλοιπα του Πεισιστράτειου Υδραγωγείου, τα οποία χρονολογούνται  στα τέλη του 6ου αιώνα π.Χ., έχουν εντοπιστεί και εκτίθενται σήμερα στο σταθμό του Ευαγγελισμού. Εκεί σήμερα μπορούμε να θαυμάσουμε τμήματα των  πήλινων αγωγών, οι οποίοι πιθανότατα προέρχονται από την κύρια γραμμή του υδραγωγείου. Στα κατάλοιπα των σωληνώσεων, είναι επίσης ορατά και τα ανοίγματα που διέθεταν για τον εύκολο καθαρισμό τους. Οι οπές, οι οποίες βρίσκονταν στην άνω επιφάνειά τους, είχαν το μέγεθος μιας παλάμης, ώστε να  μπορεί να εισχωρήσει ένα ανθρώπινο χέρι και να πραγματοποιήσει τον καθαρισμό και τη συντήρησή τους. Επιπλέον, πάνω τους εμφανίζονται χαράγματα προσανατολισμού, τα οποία σύμφωνα με κάποιους μας βοηθούν και στον υπολογισμό του χρόνου κατασκευής των αγωγών.</p><img src="assets/evaggelismos.webp" class="popimg" alt="evaggelismos">');

var pisi8 = L.marker([37.97608763832799, 23.722978457225906],{
    title: "Αρχαία Αγορά Αθηνών",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Αρχαία Αγορά Αθηνών</h4> <p>Στη δυτική πλευρά της Αρχαίας Αγοράς έχουν εντοπιστεί ένας πήλινος αγωγός, με την επιγραφή «Χάρων», καθώς και δύο θραύσματα μολύβδινου σωλήνα, τα οποία χρονολογούνται στον 5ο αιώνα π.Χ. και έχουν συνδεθεί με τη λειτουργία του υδραγωγείου.</p> <img src="assets/agora.webp" class="popimg" alt="agora">');

var pisi9 = L.marker([37.97794893292982, 23.723502490660504],{
    title: "Άγιος Θωμάς",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Άγιος Θωμάς</h4> <p>Τμήμα από την κύρια διαδρομή του Πεισιστράτειου Υδραγωγείου, με  φανερή τη χρήση των κεραμικών στοιχείων.</p> <img src="assets/agiosThomas.webp" class="popimg" alt="agiosthomas">');

var pisi10 = L.marker([37.951763692737664, 23.745614260947523],{
    title: "Υμηττός",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Υμηττός</h4> <p>Ο Πεισίστρατος, τύραννος των Αθηνών 605-527 π.Χ. , ενδιαφέρθηκε εκτός άλλων και για την επαρκή και αποτελεσματική υδροδότηση της πόλης. Για τον σκοπό αυτό,προχώρησε στην κατασκευή του Πεισιστράτειου Υδραγωγείου, το οποίο τοποθετείται χρονικά ανάμεσα στο 540 και το 530 π.Χ. Με το έργο ασχολήθηκαν και οι γιοι του,αφού τον διαδέχτηκαν. Το υδραγωγείο συγκέντρωνε τα νερά του Υμηττού, των πηγών των Πελασγών, αλλά και των πηγών που βρίσκονται πέρα από την Καισαριανή και τα μετέφερε μέχρι το άστυ, κοντά στην Ακρόπολη.</p> <img src="assets/imittos.webp" class="popimg" alt="imittos">');

var pisi11 = L.marker([37.97560118218969, 23.73893921310537],{
    title: "Λίμνη με χρυσόψαρα είσοδος Βασιλίσσης Σοφίας",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h4>Λίμνη με χρυσόψαρα είσοδος Βασιλίσσης Σοφίας</h4> <p>Το υδραγωγείο κάποτε είχε συνδεθεί με μία μυστηριώδη πετρελαιοπηγή, όπως μας αναφέρει στο βιβλίο του ο Νίκος Ταμβάκης,  ο οποίος υπήρξε για χρόνια διευθυντής του Εθνικού Κήπου. Σύμφωνα με τον κορυφαίο γεωπόνο, κάποια στιγμή είχε υποστηριχθεί ότι το υδρευτικό δίκτυο ανέβλυσε πετρέλαιο!«Το 1980 άρχισε ξαφνικά να διοχετεύεται στη λίμνη της Βασιλίσσης Σοφίας μαζί με το νερό και μικρή ποσότητα πετρελαίου. Το γεγονός προκάλεσε μάλιστα και σκωπτικά σχόλια, καθώς συνδέθηκε τότε με την ανακάλυψη φανταστικής πετρελαιοπηγής! Έπειτα από έρευνα, όμως, διαπιστώθηκε ότι ένα συνεργείο-πλυντήριο στις στρατιωτικές εγκαταστάσεις στο Γουδί, ανατολικά από το νοσοκομείο Παίδων Αγία Σοφία, άδειαζε τα υπολείμματα πετρελαίου από τα ρεζερβουάρ των φορτηγών σε ένα φρεάτιο αερισμού του υδραγωγείου, που είχαν ανακαλύψει τυχαία οι φαντάροι λίγο πιο κάτω, στη δεξιά όχθη του Ιλισού (…). Το σφράγισμα του φρεατίου σταμάτησε ευτυχώς την τροφοδοσία της αυτοσχέδιας πετρελαιοπηγής, αλλά ταυτόχρονα επιβεβαίωσε την ακρίβεια της διαδρομής του αγωγού, που είχε επισημάνει και σχεδιάσει ο Τσίλερ το 1877», ανέφερε.</p> <img src="assets/gold.webp" class="popimg" alt="gold">');


var adr1 = L.marker([38.11021482676608, 23.7683319849404],{
    title: "Ολυμπιακό χωριό- Αρχαιολογικός Χώρος (οδός Κεντέρη και Σπύρου Λούη)",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Ολυμπιακό χωριό- Αρχαιολογικός Χώρος (οδός Κεντέρη και Σπύρου Λούη)</h2><p> Βασικό τμήμα του υδραγωγείου αποτελεί μία υπόγεια σήραγγα μήκους περίπου 25 χιλιομέτρων από το σημερινό Ολυμπιακό Χωριό μέχρι την Πλατεία Δεξαμενής στο Κολωνάκι.  Αρκετά κατάλοιπα είναι ορατά στην περιοχή του Ολυμπιακού Χωριού (Αχαρνές) ακόμα και σήμερα. Κατά την διάρκεια εργασιών για τους Ολυμπιακούς  Αγώνες εντοπίστηκε τμήμα  αγωγού μαζί με τα φρεάτιά του.  Άλλο ένα σημαντικό εύρημα  αποτελούν και  σωζόμενα μέλη της βόρειας απόληξης του έργου. Παράλληλα σώζεται και η κεκλιμένη στοά , μέσω της οποίας η σήραγγα συνδεόταν με την επιφάνεια του εδάφους.</p>');

var adr2 = L.marker([38.060831, 23.768191],{
    title: "Δήμος Μεταμόρφωσης",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Δήμος Μεταμόρφωσης</h2><p>Στην ευρύτερη περιοχή του Δήμου Μεταμόρφωσης συναντάμε αρκετά κατάλοιπα  του υδραγωγείου. Διάσπαρτα  συναντάμε  φρεάτια και βαθιά πηγάδια  του υδραγωγείου, με τα οποία αξιοποιούνταν υδροφόρος βάθους 15 μέτρων. Σπουδαίο επίτευγμα του Δήμου αποτελεί η άρδευση μεγάλων εκτάσεων πρασίνου του  και η κάλυψη δημοτικών αναγκών με νερό που προέρχεται από το υδραγωγείο. Αυτό το έργο πραγματοποιείται από το 1999 και είναι αποτέλεσμα της χρήσης παλαιών αλλά και νέων υδρευτικών εγκαταστάσεων. </p>');

var adr3 = L.marker([38.03968219041484, 23.786577561365736],{
    title: "Ο.Α.Κ.Α",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Ο.Α.Κ.Α</h2><p>Στο χώρο του Ολυμπιακού Σταδίου Αμαρουσίου έχουν ανακαλυφθεί αρκετά σημαντικά ευρήματα από  τον αρχαίο κόσμο. Πολλά από αυτά ανήκουν στο Αδριάνειο Υδραγωγείο. Σε βάθος περίπου 20 μ. βρίσκεται η σήραγγα του υδραγωγείο. Ορατά είναι και πολλά φρεάτια, κυκλικής ή τετράγωνης διατομής. Στο βόρειο τμήμα του Σταδίου παρατηρούμε  φρεάτια του Υδραγωγείου στις θέσεις  121, 119 και 122.  </p>');

var adr4 = L.marker([38.0267518583479, 23.791221710724518],{
    title: "Χαλάνδρι - Οδός Ελ-Αλαμέιν",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Χαλάνδρι - Οδός Ελ-Αλαμέιν</h2><p>Άλλο ένα σημαντικό σημείο για την μελέτη του Αδριάνειου Υδραγωγείου αποτελεί η περιοχή του Χαλανδρίου. Εξαιτίας των προσπαθειών κάλυψης των υδρευτικών αναγκών των κατοίκων, το 1875 ανακαλύφθηκε, και στην συνέχεια ,  καθαρίστηκε κυκλική δεξαμενή, η οποία και λειτούργησε.  Το φρέαρ με αριθμό 112, το οποίο βρίσκεται στην σημερινή οδό Ελ Αλαμέιν, πιθανότατα κατέληγε στην δεξαμενή κυκλικής κάτοψης . Το νερό της δεξαμενής του Χαλανδρίου κατέληγε στο Αδριάνειο Υδραγωγείο.  Αυτά τα κατάλοιπα αποτελούν τεκμήρια για την ύπαρξη ενός δευτερεύοντος  υδραγωγείου, το οποίο συνδεόταν με το Αδριάνειο.  </p>');

var adr5 = L.marker([37.98902838253315, 23.758652997229465],{
    title: "Αμπελόκηποι- Αγ. Δημήτριος (οδός Πανόρμου)",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Αμπελόκηποι- Αγ. Δημήτριος (οδός Πανόρμου)</h2><p> Σε αρκετά σημεία της περιοχής ένας επισκέπτης μπορεί να παρατηρήσει μέρη του υδραγωγείου.  Το 19ο αι. το Υδραγωγείο επαναλειτούργησε μέχρι τον Αγ. Δημήτριο Αμπελοκήπων με την βοήθεια της αρχαίας σήραγγας. Από την περιοχή του Αγ. Δημητρίου μέχρι την Δεξαμενή στο Κολωνάκι κατασκευάστηκε νέος μεταλλικός αγωγός.  Πιο συγκεκριμένα το 1847, αγωγός με μήκος 4 χιλιόμετρα ανακαλύφθηκε μεταξύ Αμπελόκηπων και Ψυχικού.  Το νερό συγκεντρωνόταν στην δεξαμενή των Αμπελόκηπων και από εκεί διοχετευόταν στην πόλη μέσα από έναν νέο επιφανειακό αγωγό. Για αρκετό καιρό επικρατούσε η άποψη πως μία πηγή υπήρχε σε αυτό το σημείο. Στην πραγματικότητα , η σήραγγα που περνούσε από το σημείο είχε καταρρεύσει, πιθανότατα εξαιτίας του πετρώματος, αθηναϊκού σχιστόλιθου,  και ο τρόπος με τον οποίο ανέβλυζε το νερό έδινε την εντύπωση πηγής. Σήμερα, παρατηρούμε απομεινάρια του μεταλλικού αγωγού, ο οποίος διασχίζει την οδό Λουίζης Ριάνκουρ. Παλαιότερα ήταν ορατά και πηγάδια σε όλο το μήκος της οδού. Υπάρχουν εικασίας πως το υδραγωγείο συνεχίζει να μεταφέρει νερό, παρά τις τμηματικές καταρρεύσεις, μέχρι το τέρμα του στην  Πανόρμου. </p>');

var adr6 = L.marker([37.97889743565375, 23.741603518072193],{
    title: "Κολωνάκι- Πλ. Δεξαμενής",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h2>Κολωνάκι- Πλ. Δεξαμενής</h2><p>Το Αδριάνειο Υδραγωγείο κατέληγε σε λιθόκτιστη δεξαμενή, η οποία κατασκευάστηκε στο λόφο του Λυκαβηττού (σημερινή Πλατεία Δεξαμενής, Κολωνάκι)και ανακαλύφθηκε το 1870. Η Αδριάνεια Δεξαμενή είχε χωρητικότητα 500 κυβικά μέτρα. Χαρακτηριστικό  της  αποτελεί το πρόπυλο από τέσσερις κίονες  ιωνικού ρυθμού και η επιγραφή στην οποία γίνεται αναφορά στους δύο Ρωμαίους αυτοκράτορες που ήταν υπεύθυνοι για την κατασκευή του υδραγωγείου, Αδριανό και  Αντωνίνο.  Η Δεξαμενή λειτουργούσε κανονικά μέχρι την περίοδο της  Τουρκοκρατίας , κατά την διάρκεια της οποίας  το Υδραγωγείο εγκαταλείφτηκε.  Η ανακάλυψη πρώτα  του Υδραγωγείου και έπειτα της δεξαμενής ήταν αποτέλεσμα των υδρευτικών αναγκών της πόλης μετά την απελευθέρωση της  χώρας από τους Τούρκους. Η Δεξαμενή ανακατασκευάστηκε, φτάνοντας τα 2200 κυβικά μέτρα. Η λειτουργία της συνεχίστηκε μέχρι το 1940. Σήμερα, είναι επισκέψιμη και αποτελεί ένα από τα πιο ενδιαφέροντα αξιοθέατα στο κέντρο της Αθήνας.</p>');


var krin1 = L.marker([37.97157499400847, 23.721057213077984],{
    title: "Κρήνη Καλλιρόη Πνύκας",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη Καλλιρόη Πνύκας</h2><p>Η Καλλιρρόη, ή αλλιώς «Εννεάκρουνος πηγή» είναι μία από τις πιο διάσημες κρήνες της Αρχαιότητας.Ανέβλυζε από τον Υμηττό και εξέβαλε στον ποταμό Ιλισό.Ο Παυσανίας τη θεωρεί ως τη μόνη με καλό πόσιμο νερό στην Αθήνα, ενώ ο Ηρόδοτος και ο Θουκυδίδης, τοποθετούν τη θέση της νοτιοανατολικά της Αρχαίας Αγοράς, κοντά στην κοίτη του Ιλισού ποταμού και σε απόσταση κοντινή από το Ολυμπιείο, ίσως σε σημείο πίσω από την σημερινή εκκλησία της Αγ. Φωτεινής.Κατά την εποχή των Πεισιστρατιδών, τα νερά της κρήνης διοχετεύθηκαν στην περίφημη Εννεάκρουνο, για τις ανάγκες υδροδότησης της πόλης, στις πλαϊνές πλευρές της οποίας διαμορφώνονταν αβαθείς υδρομαστευτικές δεξαμενές, όπου υπήρχαν οι εννέα κρουνοί εκροής των υδάτων.Η υδροδότησή της γινόταν, πιθανότατα, από την ανατολική πλευρά μέσω υπόγειου πήλινου αγωγού. Η χρήση της κρήνης ήταν συνδεδεμένη όχι μόνο με τις ανάγκες υδροδότησης της πόλης, για την οποία αποτέλεσε αρδευτικό έργο υψίστης σημασίας, αλλά και με τελετές θρησκευτικού χαρακτήρα, μιας και γνωρίζουμε ότι από την Καλλιρρόη έπαιρναν νερό οι κόρες της Αθήνας για το γαμήλιο λουτρό τους. Μολονότι δεν σώζεται στις μέρες μας, αναφέρεται κατ’ επανάληψη στην αρχαία ελληνική γραμματεία και εικάζεται ότι έχει επίσης απεικονιστεί σε δεκάδες αθηναϊκές μελανόμορφες υδρίες του 6ου αι. π.Χ., οι οποίες αναπαριστούν σκηνές με νεαρές, ανύπαντρες κοπέλες, να αντλούν νερό από ένα κρηναίο οικοδόμημα.Στην ελληνική μυθολογία, με το όνομα «Καλλιρρόη» εννοούσαν την «καλή ροή», την «όμορφη ροή». </p>  <img src="assets/kalliroi.webp" class="popimg" alt="kalliroi">');

var krin2 = L.marker([37.977637435465134, 23.73161202231567],{
    title: "Κρήνη Λέκκα",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη Λέκκα</h2><p></p>');

var krin3 = L.marker([37.98263698219047, 23.705320722877204],{
    title: "Κρήνη του Χασέκη",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη του Χασέκη</h2><p>Η κρήνη του Χασεκή βρίσκεται μέσα στο χώρο του Γεωπονικού Πανεπιστημίου Αθηνών στην Ιερά Οδό.Κατασκευάστηκε από τον Χατζή Αλή Χασεκή στο β΄ μισό του 18ου αιώνα.Η μαρμάρινη πρόσοψή της περιβάλλεται από δύο παραστάδες, που στηρίζουν τόξα διπλής καμπυλότητας.Το νερό της Κρήνης προερχόταν από υδραγωγείο που συγκέντρωνε τα αναβλύζοντα ύδατα της Γλυκότρυπας κοντά στις όχθες του Κηφισού και τα διοχέτευε δεξιά της κοίτης του ποταμού. Το νερό έρρεε παραπλήσια των υδρόμυλων του Κορομήλα, του Σκουντούπη και του Τσιλώνη, διέσχιζε πλησίον του χωριού Δερβίσαγου την κοίτη του Κηφισού και κατέληγε, περνώντας μέσα από τον χώρο της Ακαδημίας, στο κτήμα Χασεκή.Γύρω από τη σωζόμενη σήμερα κρήνη του Χασεκή, βρισκόταν το τσιφλίκι και η οχυρωμένη κατοικία του Χατζη Αλη Χασεκή Αγά. Σήμερα σώζονται μόνο τα θεμέλια της κατοικίας σε ένα από τα νεότερα κτίρια του Γεωπονικού Πανεπιστημίου.</p> <img src="assets/xaseki.webp" class="popimg"alt="xaseki">');

var krin4 = L.marker([37.997566437443666, 23.727551813078588],{
    title: "Κρήνη του Αλί Αγά",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη του Αλί Αγά</h2><p>Η Κρήνη του Αγά, βρισκόταν στο σημερινό ιερό ναό του Αγίου Παντελεήμονα στην οδό Αχαρνών. Εκεί, συγκεντρώθηκαν τον Αύγουστο του 1822 οι προεστοί για να υποδεχτούν τον Οδυσσέα Ανδρούτσο που ερχόταν να αναλάβει τη θέση του Φρούραρχου στην Αθηναϊκή Ακρόπολη. Εδώ δέχονταν προσκύνημα από τους δημογέροντες όταν αναλάμβαναν τη διοίκηση της πόλης.Σύμφωνα με τον Δημήτρη Σκουζέ, παρείχε καθημερινά 30-35 κυβικά μέτρα νερό. Η κρήνη μνημονεύεται σε προικοσύμφωνο του 18ου αιώνα και σε λαϊκό τραγούδι για την Τουρκοκρατία.</p>');

var krin5 = L.marker([37.97514484125792, 23.735813403279106],{
    title: "Κρήνη Μπουμπουνίστρα",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη Μπουμπουνίστρα</h2><p>Η Μπουμπουνίστρα βρισκόταν πάνω από τη σημερινή πλατεία Συντάγματος, εκεί που το 1844 χτίστηκαν τα ανάκτορα του Όθωνα και της Αμαλίας, τη σημερινή Βουλή των Ελλήνων.Υπήρχε εκεί μια παλαιά κρήνη, μια μεσαιωνική βρύση, στη συμβολή των σημερινών οδών Όθωνος και Αμαλίας. Ήταν κατασκευασμένη από τρεις μεγάλους λίθους, πιθανότατα από το Αδριάνειο υδραγωγείο και έφερε πάνω της χαραγμένη Λατινική επιγραφή.Το όνομα Μπουμπουνίστρα το πήρε από την ομώνυμη πηγή που βρισκόταν δίπλα της, εντός των τειχών, τα νερά της οποίας «μπουμπούνιζαν» καθώς κατέβαιναν με ορμή από τους Αμπελόκηπους,ακολουθώντας το υδραγωγείο του Αδριανού.Στην πύλη της Μπουμπουνίστρας είχαν σημειωθεί σημαντικές μάχες κατά τον απελευθερωτικό αγώνα του 1821. Τότε αυτή, όπως και οι άλλες πύλες της πόλης, είχε ενισχυθεί με πύργους (μπούρτζια). Μικρά, βίαια επεισόδια, είχαν λάβει μέρος γύρω από την πύλη κατά την έναρξη της Επανάστασης, το Πάσχα του 1821, όταν οι Τούρκοι φοβούμενοι, έκλεισαν τις πύλες και απαγόρευαν την είσοδο και έξοδο του πληθυσμού.</p> <img src="assets/mpoumpounistra.webp" class="popimg" alt="mpoumpounistra">');

var krin6 = L.marker([37.97859680190821, 23.72496534191348],{
    title: "Κρήνη του Ψυρρή",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη του Ψυρρή</h2><p></p>');

var krin7 = L.marker([37.971671831952854, 23.726146164644742],{
    title: "Κρήνη Κλεψύδρα",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη Κλεψύδρα</h2><p>Κλεψύδρα:μία φυσική πηγή στη βόρεια κλιτύ της Αθηναϊκής Ακρόπολης.Η πηγή, στις αρχές του 5ου αιώνα π.Χ, διαμορφώθηκε σε κρήνη από τον Κίμωνα και ονομάστηκε «Κλεψύδρα», γιατί τα νερά της άλλοτε ξεχείλιζαν και άλλοτε χάνονταν μέσα στον βράχο, με αποτέλεσμα να μοιάζει με Κλεψύδρα που αναποδογυρίζει. Η χρήση της αρχαίας κρήνης συνεχίστηκε για σχεδόν 1.500 χρόνια.Μπροστά από την κρήνη, άρχιζε το τελευταίο και πιο ανηφορικό τμήμα της πομπής των Παναθηναίων, της μεγαλύτερης γιορτής στην Αθήνα προς τιμήν της θεάς Αθηνάς. Λέγεται, ότι εκεί λατρευόταν η νύμφη Εμπεδώ, για αυτό το λόγο η κρήνη Κλεψύδρα ονομάζεται και «Εμπεδώ».Τον 2ο αιώνα μ.Χ. γκρεμίζεται η στέγη της και μετατρέπεται σε πηγάδι.Στα χρόνια του Ιουστινιανού, η ίδια αρχίζει να τροφοδοτεί μία δεξαμενή και 400 χρόνια αργότερα μετατρέπεται σε ναΐδριο των Αγίων Αποστόλων με αγίασμα.Το 1822 ανακαλύπτεται εκ νέου από τον αρχαιολόγο Πιττάκη, στην προσπάθεια παροχής νερού στους  πολιορκημένους Έλληνες στην Ακρόπολη. Το 1823 ανεγείρεται προμαχώνας από τον Οδυσσέα Ανδρούτσο. Το 1897, κατεδαφίζεται ο προμαχώνας και αποκαλύπτεται η Κλεψύδρα.</p> <img src="assets/klepsidra.webp" class="popimg" alt="klepsidra">');

var krin8 = L.marker([37.974420615623075, 23.726898009383042],{
    title: "Κρήνη των Αέρηδων",
    opacity: 0.9,
    icon: redIcon
}).bindPopup('<h2>Κρήνη των Αέρηδων</h2><p>Οι Αέρηδες, όπως είναι σήμερα γνωστό το μνημείο, είναι ένας οκταγωνικός πύργος κατασκευασμένος από πεντελικό μάρμαρο. Στην κορυφή της κωνικής στέγης, ο ορειχάλκινος ανεμοδείκτης σε μορφή Τρίτωνα έδειχνε την κατεύθυνση των ανέμων, οι οποίοι εικονίζονται ανάγλυφα στο πάνω μέρος κάθε πλευράς. Τα ονόματά τους είναι χαραγμένα κάτω από το γείσο: ΒΟΡΕΑΣ, ΚΑΙΚΙΑΣ, ΑΠΗΛΙΩΤΗΣ, ΕΥΡΟΣ, ΝΟΤΟΣ, ΛΙΨ, ΖΕΦΥΡΟΣ, ΣΚΙΡΩΝ. Κάτω από κάθε άνεμο υπάρχουν χαραγμένες ακτίνες σε διάφορους σχηματισμούς αποτελώντας ένα ηλιακό ρολόι. Όπως σημειώνει ο Ουάρρωνας, στη νότια πλευρά του οικοδομήματος υπήρχε δοχείο κυλινδρικού σχήματος με νερό που παρεχόταν μέσω αγωγού από πηγή της βόρειας πλευράς της Ακρόπολης.  Ο πιθανότερος χρόνος κατασκευής του είναι γύρω στο 47 π.Χ. από τον αστρονόμο Ανδρόνικο από την Κύρρο της Μακεδονίας. Εκτός από ρολόι, ο Πύργος των Ανέμων, φαίνεται πως λειτουργούσε και ως μετεωρολογικός σταθμός προκαλώντας τον θαυμασμό του κοινού τότε αλλά και μέχρι τις μέρες μας, ως επίτευγμα της επιστήμης. </p><img src="assets/aeridon.webp" class="popimg" alt="aeridon">');

pisiMarkers.addLayer(pisi2);
pisiMarkers.addLayer(pisi3);
pisiMarkers.addLayer(pisi4);
pisiMarkers.addLayer(pisi5);
pisiMarkers.addLayer(pisi6);
pisiMarkers.addLayer(pisi7);
pisiMarkers.addLayer(pisi8);
pisiMarkers.addLayer(pisi9);
pisiMarkers.addLayer(pisi10);
pisiMarkers.addLayer(pisi11);

adrMarkers.addLayer(adr1);
adrMarkers.addLayer(adr2);
adrMarkers.addLayer(adr3);
adrMarkers.addLayer(adr4);
adrMarkers.addLayer(adr5);
adrMarkers.addLayer(adr6);

krinMarkers.addLayer(krin1);
krinMarkers.addLayer(krin2);
krinMarkers.addLayer(krin3);
krinMarkers.addLayer(krin4);
krinMarkers.addLayer(krin5);
krinMarkers.addLayer(krin6);
krinMarkers.addLayer(krin7);
krinMarkers.addLayer(krin8);


map.addLayer(pisiMarkers);
map.addLayer(adrMarkers);
map.addLayer(krinMarkers);

//Legend specific
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<img src="https://images.squarespace-cdn.com/content/v1/5d9215999407f56f21a932d9/1582536642822-TZ5QVS0B580SUP87QOLM/favicon.ico" alt="Herakleidon" width="30" height="30"><span>Μουσείο Ηρακλειδών </span><br> ';
  div.innerHTML += '<br>';
  div.innerHTML += '<span>Αρχαία Υδραγωγεία</span><br>';
  div.innerHTML += '<i style="background: #9b870c"></i><span>Αδριάνειο</span><br>';
  div.innerHTML += '<i style="background: #301934"></i><span>Πεισιστράτειο</span><br>';  
  return div;
};
legend.addTo(map);

var overlays = {
    "Αδριάνειο" : adrMarkers,
    "Πεισιστράτειο" : pisiMarkers,
    "Δημόσιες Κρήνες της Αθήνας" : krinMarkers
}


layerControl = L.control.layers(null, overlays, {position: 'topleft'});
layerControl.addTo(map);

var legend = L.control({ position: "topright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend2");
  div.innerHTML += '<span>Μεγεθύνετε στις διαδρομές για περισσότερες πληροφορίες</span><br>';
  return div;
};
legend.addTo(map);

map.locate();

function onLocationFound(e) {
    var radius = e.accuracy;
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
