import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import FormField from "./formfield";
import Note from "./note";
function App() {
  const [noteList, setNote] = useState([]);
  function submit(content, header) {
    // console.log(content + " " + header);
    setNote((previousNote) => {
      return [
        ...previousNote,
        {
          noteHeading: header,
          noteContent: content,
        },
      ];
    });
  }
  function deleteNote(id) {
    setNote((previousNote) => {
      return previousNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <FormField handleSubmit={submit} />
      {noteList.map((note, index) => {
        return (
          <Note
            header={note.noteHeading}
            id={index}
            body={note.noteContent}
            key={index}
            handleClick={(id) => {
              deleteNote(id);
            }}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
