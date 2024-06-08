import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CompactPicker } from 'react-color';
import './Editor.css'
// import { useParams } from 'react-router-dom';

const Editor = () => {

  const [text, setText] = useState('');
  const [font, setFont] = useState('Helvetica Neue');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [size, setSize] = useState(11);
  const [textAlign, setTextAlign] = useState('left');
  const [textColor, setTextColor] = useState('#000000');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleStrikethrough = () => {
    setIsStrikethrough(!isStrikethrough);
  };

  const increaseSize = () => {
    setSize(size + 1);
  };

  const decreaseSize = () => {
    setSize(size - 1);
  };

  const handleTextAlign = (align) => {
    setTextAlign(align);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };


  return (
    <>
      <header>
        <div class="navbar-editor">
          <div class="logo">
            <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Logo" />
          </div>
          <nav>
            <ul id="action-buttons">
                <button>Save Progress</button>
                <button>Download</button>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="canvas">
          {/* Image on canvas */}
          <img src="https://firebasestorage.googleapis.com/v0/b/uvelaphi-designs.appspot.com/o/Uvelaphi.png?alt=media&token=db20bb08-f0aa-4491-a976-249487a536f7" alt="Example Image" />
        </div>
        <div className="MyEditorContainer">
          <div className="MyEditorWrapper">
            <textarea
              className="MyEditorTextArea"
              rows="2" cols="30"
              value={text}
              onChange={handleTextChange}
              style={{
                fontFamily: font,
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: `${isUnderline ? 'underline' : ''} ${isStrikethrough ? 'line-through' : ''
                  }`,
                fontSize: `${size}pt`,
                textAlign: textAlign,
                color: textColor,
              }}
            />
            <div className="MyEditorControls">
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Font:</label>
                <select
                  className="MyEditorSelect"
                  value={font}
                  onChange={handleFontChange}
                >
                  <option>Helvetica Neue</option>
                  <option>Arial</option>
                  <option>Times New Roman</option>
                  <option>Georgia</option>
                  <option>Verdana</option>
                  <option>Courier New</option>
                </select>
              </div>
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Formatting:</label>
                <button
                  className={`MyEditorButton ${isBold ? 'MyEditorActiveButton' : ''}`}
                  onClick={toggleBold}
                >
                  B
                </button>
                <button
                  className={`MyEditorButton ${isItalic ? 'MyEditorActiveButton' : ''}`}
                  onClick={toggleItalic}
                >
                  I
                </button>
                <button
                  className={`MyEditorButton ${isUnderline ? 'MyEditorActiveButton' : ''}`}
                  onClick={toggleUnderline}
                >
                  U
                </button>
                <button
                  className={`MyEditorButton ${isStrikethrough ? 'MyEditorActiveButton' : ''}`}
                  onClick={toggleStrikethrough}
                >
                  S
                </button>
              </div>
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Size:</label>
                <button className="MyEditorButton" onClick={decreaseSize}>-</button>
                <span className="MyEditorSizeLabel">{size}pt</span>
                <button className="MyEditorButton" onClick={increaseSize}>+</button>
              </div>
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Text Align:</label>
                <button
                  className={`MyEditorButton ${textAlign === 'left' ? 'MyEditorActiveButton' : ''}`}
                  onClick={() => handleTextAlign('left')}
                >
                  L
                </button>
                <button
                  className={`MyEditorButton ${textAlign === 'center' ? 'MyEditorActiveButton' : ''}`}
                  onClick={() => handleTextAlign('center')}
                >
                  C
                </button>
                <button
                  className={`MyEditorButton ${textAlign === 'right' ? 'MyEditorActiveButton' : ''}`}
                  onClick={() => handleTextAlign('right')}
                >
                  R
                </button>
              </div>
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Color:</label>
                <CompactPicker
                  color={textColor}
                  onChange={handleTextColorChange}
                  className="MyEditorColorPicker"
                />
              </div>
              <div className="MyEditorControl">
                <label className="MyEditorLabel">Image:</label>
                <input
                  type="file"
                  className="MyEditorFileInput"
                  onChange={handleImageUpload}
                />
              </div>
              <div id="upload-area" class="drop-zone">
                <input type="file" id="file-input" accept="image/*" multiple />
                <p>Drag & Drop images here</p>
              </div>
              <div id="preview"></div>
              <div id="action-buttons">
                <button>Save Progress</button>
                <button>Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
