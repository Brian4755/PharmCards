let prescriptionData = [
  {
    brand: 'Atorvastatin',
    generic: 'Lipitor',
    function: 'Used to treat high cholesterol, and to lower the risk of stroke or heart attack.'
  },
  {
    brand: 'Levothyroxine',
    generic: 'Synthroid',
    function: 'Treats hypothyroidism (low thyroid hormone). It is also used to treat or prevent goiter (enlarged thyroid gland'
  },
  {
    brand: 'Lisinipril',
    generic: 'Prinivil/Zestril',
    function: 'Used to treat high blood pressure (hypertension) or congestive heart failure. It is also used to improve survival after a heart attack.'
  },
  {
    brand: 'Metformin',
    generic: 'Riomet',
    function: 'Used to improve blood sugar control in people with type 2 diabetes.'
  },
  {
    brand: 'Amlodipine',
    generic: 'Norvasc',
    function: 'Used to treat high blood pressure. It is a calcium channel blocker, which relaxes blood vessels.'
  },
  {
    brand: 'Metoprolol',
    generic: 'Lopressor',
    function: 'Beta-blocker used to treat high blood pressure, chest pain, and heart failure.'
  },
  {
    brand: 'Albuterol',
    generic: 'Ventolin',
    function: 'Prescribed to treat asthma and breathing problems caused by chronic obstructive pulmonary disease (COPD). It is a medication known as a bronchodilator.'
  },
  {
    brand: 'Omeprazole',
    generic: 'Prilosec',
    function: 'Prescribed to treat gastroesophageal reflux disease (GERD). It is also used to lower levels of acid in the stomach.'
  },
  {
    brand: 'Losartan',
    generic: 'Cozaar',
    function: 'Used to treat high blood pressure (hypertension). It is also used to lower the risk of stroke in certain people with heart disease.'
  },
  {
    brand: 'Simvastatin',
    generic: 'Zocor',
    function: 'Used to lower cholesterol and triglycerides (types of fat) in the blood.'
  },
  {
    brand: 'Gabapentin',
    generic: 'Neurontin',
    function: 'Anticonvulsant used to treat epilepsy. It is also used to treat nerve pain.'
  },
  {
    brand: 'Oretic',
    generic: 'Hydrochlorothiazide',
    function: 'Used to treat high blood pressure. It is a diuretic medication.'
  },
  {
    brand: 'Sertraline',
    generic: 'Zoloft',
    function: 'Used to treat depression, anxiety, panic attacks, post-traumatic stress disorder (PTSD), and obsessive-compulsive disorder (OCD).'
  },
  {
    brand: 'Montelukast',
    generic: 'Singulair',
    function: 'Used to prevent symptoms of asthma. It may also be prescribed to reduce symptoms of hay fever.'
  },
  {
    brand: 'Flonase',
    generic: 'Fluticasone',
    function: 'Used to treat allergy symptoms such as sneezing, itching, runny nose, and watery eyes.'
  },
  {
    brand: 'Amoxicillin',
    generic: 'Amoxil',
    function: 'Antibiotic used to treat a wide variety of bacterial infections.'
  },
  {
    brand: 'Furosemide',
    generic: 'Lasix',
    function: 'Used to treat high blood pressure, and to reduce extra fluid in the body.'
  },
  {
    brand: 'Pantoprazole',
    generic: 'Protonix',
    function: 'Used to treat acid reflux and other stomach and esophagus problems.'
  },
  {
    brand: 'Omnipred',
    generic: 'Prednisone',
    function: 'Corticosteroid. It is used to treat inflammation.'
  },
  {
    brand: 'Escitalopram',
    generic: 'Lexapro',
    function: 'Prescribed to treat anxiety and depression. It is a selective serotonin reuptake inhibitor (SSRI) medication.'
  },
  {
    brand: 'Fluoxetine',
    generic: 'Prozac',
    function: 'Prescribed to treat depression and anxiety. It may be prescribed to treat panic attacks and bulimia.'
  },
  {
    brand: 'Dextroamphetamine',
    generic: 'Dexedrine',
    function: 'Prescribed to treat attention deficit hyperactivity disorder (ADHD).'
  },
  {
    brand: 'Glargine',
    generic: 'Lantus',
    function: 'Used to control high blood sugar in those with diabetes.'
  },
  {
    brand: 'Wellbutrin',
    generic: 'Bupropion',
    function: 'Prescription medication used to treat depression.'
  },
  {
    brand: 'Advil',
    generic: 'ibuprofen',
    function: 'Non-steroidal anti-inflammatory drug (NSAID) used to treat pain.'
  },
  {
    brand: 'Rosuvastatin',
    generic: 'Crestor',
    function: 'Used to treat high cholesterol. It is a medication known as a statin.'
  },
  {
    brand: 'Pravastatin Sodium',
    generic: 'Pravachol',
    function: 'Prescribed along with a healthy diet to treat high cholesterol and fats.'
  },
  {
    brand: 'Desyrel',
    generic: 'Trazodone',
    function: 'Prescribed to treat depression. It belongs to a class of medications known as serotonin receptor antagonists and reuptake inhibitors (SARIs).'
  },
  {
    brand: 'Tamsulosin',
    generic: 'Flomax',
    function: 'Used to treat the symptoms of an enlarged prostate.'
  },
  {
    brand: 'Carvedilol',
    generic: 'Coreg',
    function: 'Prescribed to treat high blood pressure and heart failure.'
  },
  {
    brand: 'Meloxicam',
    generic: 'Mobic',
    function: 'Nonsteroidal anti-inflammatory. It is used to treat arthritis and joint pain.'
  },
  {
    brand: 'Citalopram',
    generic: 'Celexa',
    function: 'Selective serotonin reuptake inhibitor (SSRI). It is used to treat depression.'
  },
  {
    brand: 'Duloxetine',
    generic: 'Cymbalta',
    function: 'Prescribed to treat depression and anxiety. It is also sometimes used to relieve nerve pain.'
  },
  {
    brand: 'Alprazolam',
    generic: 'Xanax',
    function: 'Used to treat anxiety and panic disorders. It is a benzodiazepine medication.'
  },
  {
    brand: 'MicroK',
    generic: 'Potassium',
    function: 'Prescribed to individuals who have depleted levels of potassium due to kidney disease or gastrointestinal disease.'
  },
  {
    brand: 'Clopidogrel',
    generic: 'Plavix',
    function: 'Prescribed to prevent heart attacks and strokes in individuals who have heart disease. It may also be used with other medications to treat chest pain (angina).'
  },
  {
    brand: 'Atenolol',
    generic: 'Tenormin',
    function: 'Beta-blocker prescribed to treat high blood pressure.'
  },
  {
    brand: 'Cyclobenzaprine',
    generic: 'Fexmid',
    function: 'Prescribed to treat muscle spasms. It is typically prescribed for short-term use only.'
  },
  {
    brand: 'Allopurinol',
    generic: 'Zyloprim',
    function: 'Prescribed for the treatment of gout and kidney stones. It may also be prescribed to prevent high levels of uric acid in patients undergoing chemotherapy.'
  },
  {
    brand: 'Venlafaxine',
    generic: 'Effexor',
    function: 'Used to treat depression. It is a drug known as a serotonin-norepinephrine reuptake inhibitor (SNRI).'
  },
  {
    brand: 'Warfarin',
    generic: 'Jantoven',
    function: 'Commonly called a blood-thinner. It is used to treat and prevent blood clots.'
  },
  {
    brand: 'Propranolol',
    generic: 'Hemangeol',
    function: 'Beta-blocker that is prescribed for high blood pressure, irregular heartbeats, and tremors.'
  },
  {
    brand: 'Cetirizine',
    generic: 'Quzyttir',
    function: 'Used to reduce allergy symptoms. It is an antihistamine medication.'
  },
  {
    brand: 'Estradiol',
    generic: 'Estrace',
    function: 'Hormone estrogen. It is used to treat symptoms of menopause.'
  },
  {
    brand: 'Norethindrone',
    generic: 'Junel',
    function: 'Combination hormone medication used to prevent pregnancy, and regulate menstrual periods.'
  },
  {
    brand: 'Lorazepam',
    generic: 'Ativan',
    function: 'Prescribed to treat anxiety. It is a benzodiazepine medication.'
  },
  {
    brand: 'Quetiapine',
    generic: 'Seroquel',
    function: 'Treats certain mental health and mood disorders including bipolar disorder and schizophrenia.'
  },
  {
    brand: 'Zolpidem Tartrate',
    generic: 'Ambien',
    function: 'Prescribed to treat insomnia. It is typically prescribed for short-term use only'
  },
  {
    brand: 'Ergocalciferol',
    generic: 'Vitamin D',
    function: 'Prescribed to increase levels of Vitamin D, which helps prevent and treat bone disorders.'
  },
  {
    brand: 'Budesonide',
    generic: 'Pulmicort',
    function: 'Prescribed to treat asthma. It is a corticosteroid medication.'
  },
]

export {
  prescriptionData
}