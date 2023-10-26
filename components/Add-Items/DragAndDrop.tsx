import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  alignContent: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
};

const thumb: React.CSSProperties = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #444', // Dark border color
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
  backgroundColor: '#222', // Dark background color
  position: 'relative',
};

const thumbInner: React.CSSProperties = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img: React.CSSProperties = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

const closeBtn: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

const dropzoneContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px', // Adjust the height as needed
  border: '2px dashed purple', // Dashed purple border
  borderRadius: '4px',
  cursor: 'pointer',
  alignContent: 'center',
  justifyItems: 'center',
  alignSelf: 'center'
};


function DragAndDrop() {
  const [files, setFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
  onDrop: (acceptedFiles: any[]) => {
    if (files.length + acceptedFiles.length > 5) {
      // You can display a message or alert the user that they have reached the limit
      alert('Maximum images allowed are 5.');
    } else {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
      ]);
    }
  },
});


  const removeFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image 
          src={file.preview}
          style={img}
          height='100'
          width='100'
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.name}
        />
      </div>
      <div style={closeBtn} onClick={() => removeFile(index)}>
        X
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data URIs to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div style={dropzoneContainer} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default DragAndDrop;
