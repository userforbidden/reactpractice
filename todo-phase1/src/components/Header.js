import React from "react";
//import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";

function Header(){
    return (
        <div className="contacts">
            <ContactCard 
            contact ={{name:"Mr.Whiskerson",imageUrl:"http://placekitten.com/g/200/160",phone:"(222)555-1234",
            email:"mr.whiskerson@catnap.meow"}}
            />
            <ContactCard 
            contact = {{name:"Mr.Adangamuni",
            imageUrl:"http://placekitten.com/g/150/150",
            phone:"(333)444-1234",
            email:"mr.adangamuni@catnap.meow"}}
            />
            <ContactCard 
            contact = {{name:"Mrs.Kanchana",
            imageUrl:"http://placekitten.com/g/150/175",
            phone:"(444)666-1234",
            email:"mrs.kanchana@catnap.meow"}}
            />
            <ContactCard 
            contact = {{name:"Ms.azhagupoonaic",
            imageUrl:"http://placekitten.com/g/200/199",
            phone:"(111)222-1234",
            email:"ms.azhagupoonaic@catnap.meow"}}
            />
            <ContactCard 
            contact = {{name:"Mr.Pirandi",
            imageUrl:"http://placekitten.com/g/300/300",
            phone:"(222)333-1234",
            email:"mr.pirandi@catnap.meow"}}
            />
        </div>
    )
}

export default Header