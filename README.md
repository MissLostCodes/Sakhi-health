# Sakhi-health
An AI Menstural health assistant .
Helps women in areas with no health facilities and also helps women who are illiterate in maintaining menstrual health .
It helps to provide health support to such women by collaborating with ASHA workers and NGOs.

# How to run 
backend ->
  $env:TEAM_API_KEY="your aixplain api key"
  cd backend 
  pip install -r requirements.txt 
  uvicorn main:app --reload"

frontend->
  npm start

  also add your firebase credentials in  firebaseConfig
  here -----
           |
           V
  const firebaseConfig = {

  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: .REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID


};

  ![image](https://github.com/user-attachments/assets/be231ae2-c4a1-45e8-8227-638cbf918358)
  ![image](https://github.com/user-attachments/assets/1ea583b1-8c0b-40f6-af3b-9bfe18237d5e)
  ![image](https://github.com/user-attachments/assets/3429e137-0501-47e8-85a3-ce1019feb1e8)



   
