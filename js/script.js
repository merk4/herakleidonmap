console.log('developed by Nikolaos Merkouris ©2021');

//map init
var map = L.map('map' , {attributionControl: false}).setView([38.060,23.790], 12.4);

//osm layer 
var osm = L.tileLayer('https://api.mapbox.com/styles/v1/herakleidonmap/ckv6v483y7zjj14s7o5rzaxn0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGVyYWtsZWlkb25tYXAiLCJhIjoiY2t1c2k0dHl4MTdtYTJvczdqNTltM2V2ZyJ9.e4bAo8MBc9xJ8WHROBox0g', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWVyazQiLCJhIjoiY2t1cjRob2RoMGdlbjMwbDBwZDFyc2puNyJ9.2ESqJcz9FAZp3bDlDxANCg'
});
osm.addTo(map);

// help gia sintentagmenes
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);


var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [23,39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [39, 39],
  opacity: 0.7
});

var violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [23,39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [39, 39],
  opacity: 0.7
});


//Group for zoom hide function  

var pisiMarkers = L.markerClusterGroup();

var adrMarkers = L.markerClusterGroup();

//var krinesMarkers = new L.FeatureGroup();


var pisi2 = L.marker([37.972161, 23.721247],{
    title: "Εννεάκρουνος κρήνη",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Εννεάκρουνος κρήνη (6ο αι. π. Χ.)</h4> <p>Κατά  τη διάρκεια της διακυβέρνησης των Πεισιστρατιδών,  κατασκευάστηκε η Εννεάκρουνος Κρήνη για να διοχετευτεί το νερό της κρήνης Καλλιρόης. (Βαλαβάνης και άλλοι,2008).Όσον αφορά τη θέση που βρισκόταν η κρήνη, υπάρχουν αρκετές θεωρίες. Ωστόσο, η πιο αποδεκτή τοποθετεί την Εννεάκρουνο κοντά στον ποταμό  Ιλισό (ίσως στη διασταύρωση των οδών Καλλιρρόης και Αναπαύσεως). Μάλιστα, ορισμένες αρχαίες πηγές  φαίνεται να ταυτίζουν τις δύο κρήνες. Χαρακτηριστικό παράδειγμα αποτελεί και η σχετική αναφορά του Θουκυδίδη στο έργο του «Ιστορίαι»(ΙΙ 15.3-5). <br> <i>[2.15.5] καὶ τῇ κρήνῃ τῇ νῦν μὲν τῶν τυράννων οὕτω σκευασάντων Ἐννεακρούνῳ καλουμένῃ, τὸ δὲ πάλαι φανερῶν τῶν πηγῶν οὐσῶν Καλλιρρόῃ ὠνομασμένῃ, ἐκεῖνοί τε ἐγγὺς οὔσῃ τὰ πλείστου ἄξια ἐχρῶντο, καὶ νῦν ἔτι ἀπὸ τοῦ ἀρχαίου πρό τε γαμικῶν καὶ ἐς ἄλλα τῶν ἱερῶν νομίζεται τῷ ὕδατι χρῆσθαι·<br>[2.15.5] Και η βρύση που σήμερα ονομάζεται Εννεάκρουνος, από τα έργα που έκαναν οι Πεισιστρατίδες, ονομαζόταν άλλοτε Καλλιρόη, όταν ακόμα φαινόνταν οι πηγές. Την βρύση αυτή χρησιμοποιούσαν τότε για τις περισσότερες ανάγκες τους επειδή ήταν κοντά, αλλά και σήμερα ακόμα, κατάλοιπο της αρχαίας συνήθειας, χρησιμοποιούν το νερό της βρύσης και για τους γάμους και γι’  άλλες ιεροτελεστίες. </i></p> <img src="assets/img.webp" class="popimg" alt="krini">');

var adr1 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγωγείο</h2><p>Το Αδριάνειο Υδραγωγείο στην Αθήνα κατασκευάστηκε από τον Ρωμαίο αυτοκράτορα Αδριανό, και αποπερατώθηκε από τον διάδοχό του, Πίο Αντωνίνο τον 2ο αιώνα μ.χ. με στόχο την ύδρευση της πόλης των Αθηνών από τα βρόχινα νερά της Πεντέλης και της Πάρνηθας. Τμήμα των ερειπίων του μεγαλοπρεπούς Αδριάνειου υδραγωγείου διακρίνονται σήμερα στην Νέα Ιωνία στην συνοικία Ελευθερούπολη, στα σύνορα με την Καλογρέζα. </p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/mNEjmKxcm_o" title="Αδριάνειο Υδραγωγείο" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>');


var pisi3 = L.marker([37.985774973421925, 23.801940826632602],{
    title: "Ιερά Μονή Θεολόγου",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Μονή Αγίου Ιωάννη Θεολόγου Παπάγου</h4> <p>Η διαδρομή του Πεισιστράτειου υδραγωγείου δεν έχει χαρτογραφηθεί πλήρως, ωστόσο έχουν έρθει στο φως αρκετά σημεία της διαδρομής του. Κάποια από αυτά  είναι η μονή του Αγίου Ιωάννη του Θεολόγου στις δυτικές παρυφές του Υμηττού,  αλλά και  παράπλευρα του παλαιού ναού του Αγίου Θωμά. Από εκεί συνέχιζε  στην οδό Παπαδιαμαντοπούλου, στον Εθνικό Κήπο και μέσω της οδού των Κυδαθηναίων εισερχόταν  στην παλιά Πόλη και προχωρούσε στην νότια πλευρά της Ακροπόλεως. Στη συνέχεια, κατευθυνόταν βόρεια, περνούσε από τον Άρειο Πάγο και κατέληγε στην Εννεάκρουνο Κρήνη, που ίσως ταυτιζόταν με την κρήνη Καλλιρόη. </p> <img src="assets/moniTheologou.webp" class="popimg" alt="Moni">');

var pisi4 = L.marker([37.972889777503184, 23.737338830608735],{
    title: "Εθνικός Κήπος",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Εθνικός Κήπος</h4> <p>Υδροδότηση του Εθνικού κήπου από το δίκτυο των Πεισιστρατιδών.</p> <img src="assets/kipos.webp" class="popimg" alt="kipos">');

var pisi5 = L.marker([37.980641388858935, 23.762294099204112],{
    title: "Οδός Παπαδιαμαντοπούλου",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Οδός Παπαδιαμαντοπούλου</h4> <p>Σωληνώσεις που καταλήγουν στον Εθνικό κήπο</p>');

var pisi6 = L.marker([37.97572965286372, 23.73568696282807],{
    title: "Σταθμός Μετρό «Σύνταγμα»",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Μονή Αγίου Ιωάννη Θεολόγου Παπάγου</h4> <p>Οι ανασκαφές που πραγματοποιήθηκαν κατά τη διάρκεια των έργων του Μετρό της Αθήνας, έφεραν στο φως κατάλοιπα του υδραγωγείου. Σήμερα, τμήματά τους , τα οποία χρονολογούνται στο α΄ μισό του 5ου αιώνα π.Χ., εκτίθενται στο σταθμό του Συντάγματος. Πιο συγκεκριμένα,  βρίσκονται προς έκθεση τρεις πήλινοι σωλήνες και  μία δεξαμενή του υδραγωγείου, ενώ τμήμα του αγωγού εντοπίζεται  και στην πλατεία, έξω από τον σταθμό.</p> <img src="assets/sintagma.webp" class="popimg" alt="sintagma">');

var pisi7 = L.marker([37.976391682290156, 23.747295898421186],{
    title: "Σταθμός Μετρό «Ευαγγελισμός»",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Σταθμός Μετρό «Ευαγγελισμός»</h4> <p>Κατάλοιπα του Πεισιστράτειου Υδραγωγείου, τα οποία χρονολογούνται  στα τέλη του 6ου αιώνα π.Χ., έχουν εντοπιστεί και εκτίθενται σήμερα στο σταθμό του Ευαγγελισμού. Εκεί σήμερα μπορούμε να θαυμάσουμε τμήματα των  πήλινων αγωγών, οι οποίοι πιθανότατα προέρχονται από την κύρια γραμμή του υδραγωγείου. Στα κατάλοιπα των σωληνώσεων, είναι επίσης ορατά και τα ανοίγματα που διέθεταν για τον εύκολο καθαρισμό τους. Οι οπές, οι οποίες βρίσκονταν στην άνω επιφάνειά τους, είχαν το μέγεθος μιας παλάμης, ώστε να  μπορεί να εισχωρήσει ένα ανθρώπινο χέρι και να πραγματοποιήσει τον καθαρισμό και τη συντήρησή τους. Επιπλέον, πάνω τους εμφανίζονται χαράγματα προσανατολισμού, τα οποία σύμφωνα με κάποιους μας βοηθούν και στον υπολογισμό του χρόνου κατασκευής των αγωγών.</p><img src="assets/evaggelismos.webp" class="popimg" alt="evaggelismos">');

var pisi8 = L.marker([37.97608763832799, 23.722978457225906],{
    title: "Αρχαία Αγορά Αθηνών",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Αρχαία Αγορά Αθηνών</h4> <p>Στη δυτική πλευρά της Αρχαίας Αγοράς έχουν εντοπιστεί ένας πήλινος αγωγός, με την επιγραφή «Χάρων», καθώς και δύο θραύσματα μολύβδινου σωλήνα, τα οποία χρονολογούνται στον 5ο αιώνα π.Χ. και έχουν συνδεθεί με τη λειτουργία του υδραγωγείου.</p> <img src="assets/agora.webp" class="popimg" alt="agora">');

var pisi9 = L.marker([38.00716159126844, 23.74733513769047],{
    title: "Άγιος Θωμάς",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Άγιος Θωμάς</h4> <p>Τμήμα από την κύρια διαδρομή του Πεισιστράτειου Υδραγωγείου, με  φανερή τη χρήση των κεραμικών στοιχείων.</p> <img src="assets/agiosThomas.webp" class="popimg" alt="agiosthomas">');

var pisi10 = L.marker([37.951763692737664, 23.745614260947523],{
    title: "Υμηττός",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Υμηττός</h4> <p>Ο Πεισίστρατος, τύραννος των Αθηνών 605-527 π.Χ. , ενδιαφέρθηκε εκτός άλλων και για την επαρκή και αποτελεσματική υδροδότηση της πόλης. Για τον σκοπό αυτό,προχώρησε στην κατασκευή του Πεισιστράτειου Υδραγωγείου, το οποίο τοποθετείται χρονικά ανάμεσα στο 540 και το 530 π.Χ. Με το έργο ασχολήθηκαν και οι γιοι του,αφού τον διαδέχτηκαν. Το υδραγωγείο συγκέντρωνε τα νερά του Υμηττού, των πηγών των Πελασγών, αλλά και των πηγών που βρίσκονται πέρα από την Καισαριανή και τα μετέφερε μέχρι το άστυ, κοντά στην Ακρόπολη.</p> <img src="assets/imittos.webp" class="popimg" alt="imittos">');

var pisi11 = L.marker([37.97560118218969, 23.73893921310537],{
    title: "Λίμνη με χρυσόψαρα είσοδος Βασιλίσσης Σοφίας",
    opacity: 0.9,
    icon: orangeIcon
}).bindPopup('<h4>Λίμνη με χρυσόψαρα είσοδος Βασιλίσσης Σοφίας</h4> <p>Το υδραγωγείο κάποτε είχε συνδεθεί με μία μυστηριώδη πετρελαιοπηγή, όπως μας αναφέρει στο βιβλίο του ο Νίκος Ταμβάκης,  ο οποίος υπήρξε για χρόνια διευθυντής του Εθνικού Κήπου. Σύμφωνα με τον κορυφαίο γεωπόνο, κάποια στιγμή είχε υποστηριχθεί ότι το υδρευτικό δίκτυο ανέβλυσε πετρέλαιο!«Το 1980 άρχισε ξαφνικά να διοχετεύεται στη λίμνη της Βασιλίσσης Σοφίας μαζί με το νερό και μικρή ποσότητα πετρελαίου. Το γεγονός προκάλεσε μάλιστα και σκωπτικά σχόλια, καθώς συνδέθηκε τότε με την ανακάλυψη φανταστικής πετρελαιοπηγής! Έπειτα από έρευνα, όμως, διαπιστώθηκε ότι ένα συνεργείο-πλυντήριο στις στρατιωτικές εγκαταστάσεις στο Γουδί, ανατολικά από το νοσοκομείο Παίδων Αγία Σοφία, άδειαζε τα υπολείμματα πετρελαίου από τα ρεζερβουάρ των φορτηγών σε ένα φρεάτιο αερισμού του υδραγωγείου, που είχαν ανακαλύψει τυχαία οι φαντάροι λίγο πιο κάτω, στη δεξιά όχθη του Ιλισού (…). Το σφράγισμα του φρεατίου σταμάτησε ευτυχώς την τροφοδοσία της αυτοσχέδιας πετρελαιοπηγής, αλλά ταυτόχρονα επιβεβαίωσε την ακρίβεια της διαδρομής του αγωγού, που είχε επισημάνει και σχεδιάσει ο Τσίλερ το 1877», ανέφερε.</p> <img src="assets/gold.webp" class="popimg" alt="gold">');


var adr1 = L.marker([38.11021482676608, 23.7683319849404],{
    title: "Ολυμπιακό χωριό- Αρχαιολογικός Χώρος (οδός Κεντέρη και Σπύρου Λούη)",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Ολυμπιακό χωριό- Αρχαιολογικός Χώρος (οδός Κεντέρη και Σπύρου Λούη)</h2><p></p>');

var adr2 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγω</h2>');

var adr3 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγω</h2>');

var adr4 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγω</h2>');

var adr5 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγω</h2>');

var adr6 = L.marker([37.979099, 23.741713],{
    title: "Περιήγηση",
    opacity: 0.9,
    icon: violetIcon
}).bindPopup('<h2>Περιήγηση στο Αδριάνειο Υδραγω</h2>');

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

map.addLayer(pisiMarkers);
map.addLayer(adrMarkers);


/*map.on('zoomend', function() {
    if (map.getZoom() <13){
            map.removeLayer(pisiMarkers);
    }
    else {
            map.addLayer(pisiMarkers);
        }
});*/


/*Legend specific*/
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

//
var legend = L.control({ position: "topright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend2");
  div.innerHTML += '<span>Μεγεθύνετε στις διαδρομές για περισσότερες πληροφορίες</span><br>';
  return div;
};
legend.addTo(map);
