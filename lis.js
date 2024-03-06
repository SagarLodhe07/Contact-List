/**Contact list JS Program */
const contact_list = [];

/**Add Contact Function */

addPerson = (name, mobile, email) => {
  contact_list.push({
    name: name,
    mobile: mobile,
    email: email,
  });
  return console.log(`${name} Added to Contact-List`);
};

/**Delete Contact Function */
deleteContact = (personName) => {
  let exisItem = contact_list.findIndex((item) => item.name === personName);
  if (exisItem !== -1) {
    contact_list.splice(exisItem, 1);
    console.log(`${personName} deleted from contact-list`);
  } else {
    console.log(`${personName} not found in contact-list`);
  }
};

/**Show Contact */

displayContact =()=>{
    return console.log(contact_list);
}

/**Dummy Data */
addPerson('Sagar',235482125,'sagar@pw.com')
addPerson('Kim',231579125,'kim@pw.com')
addPerson('Jon',231354125,'jon@pw.com')

displayContact()

deleteContact('Kim')

displayContact()

/**Subscribe */