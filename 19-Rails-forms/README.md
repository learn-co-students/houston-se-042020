# Rails-Forms

### LGs:
- [x] Use form_for, link_to and form_with
- [x] Understand Strong params
- [x] Understand how to use before_action

#### Use form_for, link_to and form_with
* form_for => instance 
* form_with => url/model
* link_to

**Task:** Create a form for editing an exsiting dog 

#### Understand Strong params
* Why do we need strong params?
    * ActionController => permitted => false
    * permitted => true
    * **Strong Parameters** is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted.

#### Understand how to use before_action
* DRY => Do not repeat yourself
---
#### Nice to know:
* so many extra routes:
    * `rake routes | grep -v "/rails"`
    * `rails new netflix-app --skip-active-storage --skip-action-mailer --skip-action-mailbox`
    * Reading: https://medium.com/@sanjaywrites/action-mailbox-explained-why-how-when-af92d8708662
* Nokogiri: Ruby gem providing HTML, XML, and Reader parsers
    * Nokogiri is an XML/HTML/CSS parser. So if you want to programatically read or edit an XML document Nokogiri is the way to go.
    * Nokogiri is a dependency of rails-dom-testing which is required by Rails.
    * As far as I see it rails-dom-testing is used to verify certain parts of a rendered HTML/CSS page.
    * source: https://stackoverflow.com/questions/41795664/what-s-the-purpose-of-nokogiri-in-rails

