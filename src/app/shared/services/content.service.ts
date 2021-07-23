import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  pages:Object ={
    'home': {
      title: 'Jangoraitad Adivasi Vikas Sanstha (JAVS)', 
      subtitle: 'Welcome to Jangoraitad Adivasi Vilas Sanstha!', 
      content: [`Jangoraitad Adivasi Vikas Sansthan was formed in 
      the year 1989 and since then the Sanstha has been actively 
      involved  in the works of social welfare. 
      The Sanstha has evolved over a period of last 10 years with 
      the association of people typically from multiple professions, 
      expertise and location/state. These working hands of Sanstha belong to 
      learned people who come from the highly experienced background of 
      Education Service Sector, from field of Information Technology, highly skilled and 
      well known Doctors, Pharmacist, Advocates, self run young Entrepreneurs, Officers 
      from Government offices, managers from private corporate etc. Overall team at Sanstha 
      is a good mix of experience, youth, enthusiasm and skills which are required to run 
      the Sansthaan and execute projects for the well being of the society.`], 
      image: 'assets/2.jpg'
    },
    'homemore': {
      title: 'Jangoraitad Adivasi Vikas Sanstha (JAVS)', 
      subtitle: 'Welcome to Jangoraitad Adivasi Vilas Sanstha!', 
      content: [`Jangoraitad Adivasi Vikas Sansthan was formed in 
      the year 1989 and since then the Sanstha has been actively 
      involved  in the works of social welfare. 
      The Sanstha has evolved over a period of last 10 years with 
      the association of people typically from multiple professions, 
      expertise and location/state. These working hands of Sanstha belong to 
      learned people who come from the highly experienced background of 
      Education Service Sector, from field of Information Technology, highly skilled and 
      well known Doctors, Pharmacist, Advocates, self run young Entrepreneurs, Officers 
      from Government offices, managers from private corporate etc. Overall team at Sanstha 
      is a good mix of experience, youth, enthusiasm and skills which are required to run 
      the Sansthaan and execute projects for the well being of the society.`], 
      image: 'assets/vatsalyamlogo.jpg'
    },

    'about': {
      title: 'About Vatsalyam', 
      subtitle: 'Helping hand to safe Motherhood', 
      content: [`
      Considering the success of Vatsalyam-1 and Vatsalyam-2 under which we supported 45 
      pregnant women till today , Sansthan has announced its plan to start Vatsalyam-3 on 
      similar lines. Currently planning phase is in progress involving below activities
      Socializing the concept of adopting expected couple/ pregnant women.
      Fund raising (mainly through crowd funding)
      Mobilization  Our team is approaching slum areas of Nagpur localities like 
      Sanjay Nagar, Pandrapudi, Sudampuri, Ambajarin Marartoli, Kachipura etc. 
      Sansthan plans to mobilize pregnant women from these areas where there is no medical 
      assistance available and the family needs health care awareness.
      Sansthan will undertake following activities under the guidance of experts 
      during both ANC (antenatal care) & PNC (post natal care) to help and support needy 
      women who normally are deprived of in getting medical help during this critical phase 
      of their life.
      ✔Creating health care awareness to couples
      ✔Providing required guidance to both  to be mother & father
      ✔Conduct counseling sessions not just for mothers but for the entire family
      ✔Regular medical check-ups and treatment by conducting medical camps
      ✔Yoga classes & exercises for expecting mothers
      ✔Sansthan will be tagging each of the adopted pregnant women to his/her donor 
      (who is interested to adopt & fund)
      ✔Sansthan will be providing regular updates and complete documentation 
      (on health check-ups of the adopted expected mother) to the donor
      This time Sansthan plans to identify around 15-20 such cases to accomplish the 
      project in phased approach . This will span for a period of around 15 months. 
      The Sansthan will be deputing few gynecology & medical experts, approx. 10 volunteers 
      and 3 full time workers on this project`], 
      image: 'assets/2.jpg'
    },
    'contact': {
      title: 'Contact', 
      subtitle: 'Contact Us', 
      content: ['How to contact us.'], 
      image: 'assets/2.jpg'
    },
    'login': {
      id:'123',
      title: 'Login', 
      subtitle: 'Wel-Come Dear Donor', 
      content: ['Pl Login with the password and username provided'], 
      image: 'assets/2.jpg'
    },
    'donate': {
      id:'123',
      title: 'JAVS Online Bank Payments Options', 
      subtitle: `JAVS requires donations to continue its programs. 
      We request you to deposit your donation amount directly at these banks.`, 
      content:
      {
          
          'sbi':{ 'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                  'Bank': 'State Bank of India', 
                  'Acct':'35225435926',
                  'IFSC':'SBIN0008239'
                },
          
        
          'axis':{
                  'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                  'Bank':'Axis Bank Ltd',
                  'Acct':'916010016242644',
                  'IFSC':'UTIB0001828'
                  },
          
          
          'rbl':{
                'Account': 'Jangoraitad Adivasi Vikas Sanstha',
                'Bank':'RBL Bank Ltd',
                'Acct':'309002377197',
                'IFSC':'RATN0000163'
          }
      
          
      },
       
      image: 'assets/2.jpg'
    }
  };
}
