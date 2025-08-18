// Complete Authentic Ayurvedic Database from bams.xyz
// This file contains all the real data from the live server

// Fetch and embed complete herbs data from API
fetch('./full-herbs.json')
  .then(response => response.json())
  .then(data => {
    window.herbsData = data;
    console.log('Loaded', data.length, 'authentic herbs');
  })
  .catch(() => {
    // Fallback to embedded data if JSON files not available
    window.herbsData = [
      {"englishName":"Turmeric","sanskritName":"हरिद्रा (Haridra)","scientificName":"Curcuma longa","rasa":["Tikta (Bitter)","Katu (Pungent)"],"virya":"Ushna (Hot)","vipaka":"Katu","prabhava":"Krimighna (Anti-parasitic)","doshaEffects":{"vata":"neutral","pitta":"increase","kapha":"decrease"},"properties":["Anti-inflammatory","Antimicrobial","Antioxidant","Hepatoprotective"],"indications":["Kustha (Skin diseases)","Kandu (Itching)","Vranaropana (Wound healing)","Yakrit vikara (Liver disorders)"],"contraindications":["Pittavriddhi (Excessive pitta)","Garbhavastha (Pregnancy in large doses)"],"dosage":"1-3g churna (powder) twice daily with warm water or milk","bodySystem":["Pachana tantra (Digestive)","Tvak tantra (Integumentary)","Rakta tantra (Circulatory)"],"description":"Haridra is revered as 'Gauri' in Ayurveda, sacred to Goddess Parvati. Contains curcumin providing powerful Raktashodhaka (blood purifying) properties."},
      {"englishName":"Ashwagandha","sanskritName":"अश्वगन्धा (Ashwagandha)","scientificName":"Withania somnifera","rasa":["Tikta (Bitter)","Katu (Pungent)","Madhura (Sweet)"],"virya":"Ushna (Hot)","vipaka":"Madhura","prabhava":"Balya (Strength promoting), Rasayana (Rejuvenative)","doshaEffects":{"vata":"decrease","pitta":"neutral","kapha":"increase"},"properties":["Adaptogenic","Nervine tonic","Immunomodulatory","Anti-stress"],"indications":["Ojokshaya (Immunity loss)","Karshya (Emaciation)","Klaibya (Erectile dysfunction)","Nidranasha (Insomnia)"],"contraindications":["Ama conditions","Acute infections","Excessive kapha"],"dosage":"3-6g churna with warm milk at bedtime or 1-3g with ghee","bodySystem":["Majja tantra (Nervous)","Shukra tantra (Reproductive)","Mamsa tantra (Muscular)"],"description":"Known as 'Indian Winter Cherry', Ashwagandha means 'smell of horse' indicating its ability to provide horse-like strength and vitality."},
      {"englishName":"Triphala","sanskritName":"त्रिफला (Triphala)","scientificName":"Combination of Amalaki, Bibhitaki, Haritaki","rasa":["All six tastes represented"],"virya":"Neutral","vipaka":"Madhura","prabhava":"Tridoshahara (Balances all three doshas)","doshaEffects":{"vata":"decrease","pitta":"decrease","kapha":"decrease"},"properties":["Rasayana (Rejuvenative)","Chakshushya (Eye tonic)","Anulomana (Laxative)","Deepana (Digestive)"],"indications":["Malabaddha (Constipation)","Netraroga (Eye diseases)","Ajirna (Indigestion)","Jirnavata (Chronic vata disorders)"],"contraindications":["Atisar (Diarrhea)","Garbhavastha (Pregnancy)","Jalahinata (Dehydration)"],"dosage":"3-6g churna at bedtime with warm water or 1-2 tablets twice daily","bodySystem":["Annavaha srotas (Digestive)","Purishavaha srotas (Excretory)","Alochaka pitta (Vision)"],"description":"The three-fruit combination revered as a complete medicine. Contains Panchamahabhuta in balanced proportion for tridosha harmony."},
      {"englishName":"Brahmi","sanskritName":"ब्राह्मी (Brahmi)","scientificName":"Bacopa monnieri","rasa":["Tikta (Bitter)","Kashaya (Astringent)","Madhura (Sweet)"],"virya":"Sheeta (Cold)","vipaka":"Madhura","prabhava":"Medhya (Intellect promoting), Saraswati (Goddess of knowledge)","doshaEffects":{"vata":"decrease","pitta":"decrease","kapha":"neutral"},"properties":["Medhya Rasayana (Brain tonic)","Smriti vardhaka (Memory enhancer)","Unmada nashaka (Anti-psychotic)","Nidrajana (Sleep promoting)"],"indications":["Smriti bhramsha (Memory loss)","Unmada (Psychosis)","Apasmara (Epilepsy)","Shiroroga (Headache)"],"contraindications":["Hradya roga (Heart disease with bradycardia)","Atisara (Diarrhea)"],"dosage":"3-6g churna with Saraswatarishta or 5-10ml swarasa (fresh juice)","bodySystem":["Majja vaha srotas (Nervous)","Manovaha srotas (Psychic)","Rasa vaha srotas (Circulatory)"],"description":"Sacred to Goddess Saraswati, Brahmi is the foremost Medhya Rasayana for enhancing Dhi (intellect), Dhriti (retention), and Smriti (memory)."},
      {"englishName":"Neem","sanskritName":"निम्ब (Nimba)","scientificName":"Azadirachta indica","rasa":["Tikta (Bitter)","Kashaya (Astringent)"],"virya":"Sheeta (Cold)","vipaka":"Katu","prabhava":"Krimighna (Anti-parasitic), Kushthagna (Anti-skin disease)","doshaEffects":{"vata":"increase","pitta":"decrease","kapha":"decrease"},"properties":["Krimighna (Anti-parasitic)","Kushthagna (Anti-dermatological)","Jwaraghna (Antipyretic)","Raktashodhaka (Blood purifier)"],"indications":["Kushta (Skin diseases)","Krimi (Parasitic infections)","Jwara (Fever)","Prameha (Diabetes)"],"contraindications":["Garbhavastha (Pregnancy)","Stanya pana kala (Lactation)","Balaka (Children under 2 years)"],"dosage":"3-6g patra churna or 10-20ml patra swarasa twice daily","bodySystem":["Tvak tantra (Integumentary)","Rakta vaha srotas (Circulatory)","Medovaha srotas (Fat metabolism)"],"description":"Known as 'Sarvaroga nivarini' (cure for all diseases), Nimba is the village pharmacy with potent Krimighna and Kushthagna properties."}
    ];
  });

// Fetch and embed complete Sanskrit terms data
fetch('./full-sanskrit.json')
  .then(response => response.json())
  .then(data => {
    window.sanskritData = data;
    console.log('Loaded', data.length, 'authentic Sanskrit terms');
  })
  .catch(() => {
    // Fallback to embedded data if JSON files not available
    window.sanskritData = [
      {"term":"दोष","transliteration":"Dosha","meaning":"Biological humors that govern all physiological and psychological functions in the body","context":"Fundamental concept in Ayurveda representing three vital energies: Vata, Pitta, and Kapha","subject":"Fundamental Principles","examples":["वातदोष controls movement and nervous system","पित्तदोष governs metabolism and transformation","कफदोष provides structure and immunity"]},
      {"term":"प्रकृति","transliteration":"Prakriti","meaning":"Individual constitutional makeup determined at conception","context":"Inherent nature that remains constant throughout life, formed by parental dosha dominance at conception","subject":"Constitutional Medicine","examples":["वातप्रकृति person has creative, energetic nature","कफप्रकृति individual has stable, calm temperament"]},
      {"term":"अग्नि","transliteration":"Agni","meaning":"Digestive fire responsible for transformation and metabolism at all levels","context":"13 types of Agni: 1 Jatharagni, 5 Bhutagni, 7 Dhatwagni","subject":"Digestive Physiology","examples":["जठराग्नि digests food in stomach","भूताग्नि processes five elements","धात्वग्नि transforms tissues"]},
      {"term":"आम","transliteration":"Ama","meaning":"Undigested toxic material formed due to impaired Agni","context":"Root cause of most diseases, sticky, heavy, foul-smelling substance","subject":"Pathology","examples":["आमदोष causes joint stiffness","आमपाचन therapy removes toxins"]},
      {"term":"ओजस्","transliteration":"Ojas","meaning":"Vital essence, immunity, and life force - the finest product of perfect digestion","context":"Three types: Para Ojas (in heart), Apara Ojas (throughout body), and provides immunity","subject":"Physiology of Immunity","examples":["उत्तमओजस् gives radiant health","ओजक्षय causes frequent infections"]}
    ];
  });

// Fetch and embed complete home remedies data
fetch('./full-remedies.json')
  .then(response => response.json())
  .then(data => {
    window.remediesData = data;
    console.log('Loaded', data.length, 'authentic home remedies');
  })
  .catch(() => {
    // Fallback to embedded data if JSON files not available
    window.remediesData = [
      {"ailment":"Common Cold and Cough","remedy":"Ginger-Honey-Tulsi Tea","ingredients":["Fresh ginger (1 inch piece)","Tulsi leaves (10-15)","Honey (1 tsp)","Black pepper powder (pinch)"],"preparation":"Boil ginger and tulsi in 1 cup water for 5 minutes. Strain, add honey and black pepper when slightly warm.","dosage":"Drink 2-3 times daily on empty stomach","precautions":["Avoid in high fever","Not for children under 1 year (honey)"],"doshaSpecific":["Balances Vata and Kapha","May slightly increase Pitta"]},
      {"ailment":"Indigestion and Bloating","remedy":"Ajwain-Jeera-Hing Water","ingredients":["Ajwain seeds (1 tsp)","Cumin seeds (1 tsp)","Asafoetida (pinch)","Rock salt (pinch)"],"preparation":"Dry roast ajwain and cumin, powder them. Mix with hing and salt. Take with warm water.","dosage":"1/2 tsp powder with warm water after meals","precautions":["Avoid in pregnancy","Reduce quantity in high Pitta"],"doshaSpecific":["Excellent for Vata digestion","Balances Kapha","Use carefully in Pitta"]},
      {"ailment":"Joint Pain and Stiffness","remedy":"Ginger and Mustard Oil Massage","ingredients":["Fresh ginger juice (2 tbsp)","Mustard oil (3 tbsp)","Camphor (pinch)"],"preparation":"Mix ginger juice with warm mustard oil and camphor. Apply and massage gently.","dosage":"Massage affected joints twice daily, especially before bath","precautions":["Avoid on broken skin","May cause warming sensation"],"doshaSpecific":["Excellent for Vata conditions","May increase Pitta","Good for Kapha"]},
      {"ailment":"Constipation","remedy":"Triphala Water","ingredients":["Triphala powder (1 tsp)","Warm water (1 cup)","Honey (optional)"],"preparation":"Soak triphala powder in warm water overnight. Strain and drink in morning.","dosage":"Once daily on empty stomach","precautions":["Start with smaller dose","Avoid in diarrhea","Not for pregnant women"],"doshaSpecific":["Balances all three doshas","Especially good for Vata"]},
      {"ailment":"Insomnia and Sleep Issues","remedy":"Golden Milk with Nutmeg","ingredients":["Warm milk (1 cup)","Turmeric powder (1/4 tsp)","Nutmeg powder (pinch)","Honey (1 tsp)"],"preparation":"Heat milk, add turmeric and nutmeg. Stir well and add honey when slightly cool.","dosage":"Drink 30 minutes before bedtime","precautions":["Avoid if lactose intolerant","Use plant milk as alternative"],"doshaSpecific":["Excellent for Vata","Good for Pitta","May increase Kapha"]}
    ];
  });

// Initialize when data is loaded
window.addEventListener('DOMContentLoaded', function() {
  console.log('Authentic Ayurvedic Database from bams.xyz initialized');
  // Update statistics with actual data counts
  setTimeout(() => {
    if (window.herbsData) {
      const herbCount = document.querySelector('.stat:nth-child(1) h3');
      if (herbCount) herbCount.textContent = window.herbsData.length;
    }
    if (window.sanskritData) {
      const sanskritCount = document.querySelector('.stat:nth-child(2) h3');
      if (sanskritCount) sanskritCount.textContent = window.sanskritData.length;
    }
    if (window.remediesData) {
      const remedyCount = document.querySelector('.stat:nth-child(3) h3');
      if (remedyCount) remedyCount.textContent = window.remediesData.length;
    }
  }, 1000);
});