---
# id: 03-ai-therapist-competition
# slug: competition
title: Competition
sidebar_label: Competition
# sidebar_position:
tags: [eu, gajger]
date_created: 2025-08-11 09:57
---
## AI-Powered Mental Health Platforms

### [**Woebot Health**](https://woebothealth.com/)

- Founded by clinical psychologist Alison Darcy, Woebot offers a chatbot that delivers Cognitive Behavioral Therapy (CBT) techniques to users;
- Studies suggest it can reduce symptoms of anxiety and depression within two weeks;
- From the site:
		- "*Mental health needs have multiplied. Support hasn't.*";
		- "*Too often, people don’t feel supported—because they aren’t*";
		- Detects potentially "concerning" language;
		- Privacy and safety:
			- [hipaa-compliance](definitions/hipaa-compliance.md) compliant;
			- [irb-review](definitions/irb-review.md) for all clinical studies;
			- [dhaf-safety-rating](definitions/dhaf-safety-rating.md) (ORCHA);
			- Mozilla privacy rating;		
##### User testing
- could not test, waiting list on the website;

### [**Replika**](https://replika.com/)

- An AI companion app that provides users with customizable avatars for various purposes, including friendship, therapy, and even romance;
- It has garnered millions of users seeking emotional support;
- "Positive feedback" model;

### [**Earkick**](https://earkick.com/)

- Web + iOs app, in-app purchases;
- Combines AI with real-time biomarker analysis to offer mental health support;
- Multi-modal large language model (LLM) companion that adapts to individual user needs over time;
- Proper startup, 2 people + a lot of advisors;
- Funded by 2 VCs;
- HEAVILY gamified, very low threshold of free features;
- [screenshot 1](/attachments/../attachments/ai-therapist-competition-earkick-1.PNG), [screenshot 2](/attachments/../attachments/ai-therapist-competition-earkick-2.PNG), [screenshot 3](/attachments/../attachments/ai-therapist-competition-earkick-3.PNG), [screenshot 4](/attachments/../attachments/ai-therapist-competition-earkick-4.PNG), [screenshot 5](/attachments/../attachments/ai-therapist-competition-earkick-5.PNG);
##### User testing
- could not test, waiting list on the website;

### [**Serena**](https://serena.chat/)

- Mobile app, in-app purchases;
- Uses evidence-based CBT techniques to provide 24/7 mental health support;
- Highly accessible and user-friendly;
- [screenshot 1](/attachments/../attachments/ai-therapist-competition-serena-1.PNG), [screenshot 2](/attachments/../attachments/ai-therapist-competition-serena-2.PNG);
#### **User testing**
- used voice mode, female responded;
- kinda robotic in her dynamics, "sterile" in responses when compared with Abby, ChatGPT and others;
- iOS app **buggy as hel**l, talking for longer time does not keep the screen alive, app throws an error message when you return;
- Hit paywall limit after just a few prompts back and forth, 2000 char. message limit (no counter, at least not in voice mode);

### [**Abby**](https://abby.gg/) 

- Freemium AI therapist chatbot, learns from user interactions to offer personalized suggestions;
- Tracks emotional patterns over time;
- Trained on thousands of therapy books and research papers;
- Paid: 20$ /mo. deeper insights, enhanced personalization, and access to specialized tools;
- iOS app immediately wants you to pay (screenshot in Google Drive);
#### **User testing**
- Tested the web app, used voice mode;
- Interface and mechanics very similar to GPT;
- A bit of initial config (tone for responses, desired therapy model, ...), after that easy to use;
- Conclusion: liked this one a lot, same wuality of "content" like on ChatGPT but way less... "*all-over-the-top-positive in a sense of american action-movies exaggerated*" fluff;

### **EmoBay**

- Launched in 2025;
- 24/7 AI chatbot service designed to assist users in managing stress and anxiety;
- Features like daily check-ins and context-sensitive responses;

---
## Avatar-Based and VR Therapy Solutions

### [AVAtalk](https://avatalkapp.com/)

- This platform offers Avatar Therapy, allowing patients to visualize and interact with representations of their auditory hallucinations, helping them regain control and reduce distres;
- Hasn't launched, "Coming soon" notice on their website;

### Cedars-Sinai's VR Therapy

- Researchers at Cedars-Sinai have developed an application that combines AI and virtual reality, featuring avatars trained to conduct talk therapy with patients in relaxing environments.

---
## Research and Development Initiatives

1. **Mount Sinai & IBM Research Collaboration**  
	- Mount Sinai Health System and IBM Research have launched efforts to leverage AI and behavioral data to improve mental health care for young people, focusing on identifying clinical signatures through audio-visual interviews and digital health data.
2. **iNonymize by MIT Media Lab**
	- A tele-mental health platform that uses generative AI avatars to preserve a user's privacy and identity while allowing for expressivity, enabling emotional signals to be conveyed without revealing personal identity.

---
## AI Tools for Mental Health Professionals

1. **Mentalyc**
	- An AI-powered tool that automates therapy progress notes, helping mental health professionals save time and enhance care while ensuring compliance with regulations.
2. **Upheal**
	- Designed for therapists and coaches, Upheal provides AI-generated notes to help professionals stay present during sessions and save time, with full compliance to privacy standards .

---
## Strategic Considerations for Our Project

#### Differentiation

While many platforms offer AI-driven mental health support, few combine realistic avatars with AI to simulate human-like psychotherapy sessions. Emphasizing this unique aspect can set our product apart.​

#### Ethical Framework

Addressing concerns about dependency, privacy, and the handling of severe mental health issues is crucial. Implementing safety protocols and clear disclaimers can help mitigate risks.​

#### Accessibility

Offering a freemium model can attract users from diverse backgrounds, including those in regions where mental health services are scarce or stigmatized.​

#### Consortium Collaboration

Partnering with academic institutions like the College of Electrical Engineering and Computing (FER) will enhance the AI component of our project, while collaboration with psychotherapy organizations ensures clinical validity.

---
## Preliminary Competitor Landscape – Early Read

### What’s Wrong With the Others (based on our testing)

- Low technical quality (Serena crashes, UI flaws, bad UX);
- Gimmicky or paywall-heavy (Earkick, Mindspa, etc.);
- Chatbot-only (Abby, Wysa, etc.) — no embodiment, no sensory channel;
- Emotional tone mismatches — either _too cheerleadery_ or _too cold_;
- No meaningful escalation/triage path – it’s all just self-service loops;

That’s a field of lightweight tools pretending to be helpful. **We’re not building a toy.** We’re building a **therapeutic instrument**.