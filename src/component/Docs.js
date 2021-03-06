import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Icon_file from '../img/file.png';

export const Docs = (props) => {
    const [docs, setDocs] = useState({
        title : '',
    })
    return <>
        <FileDiv>
            <img src = {Icon_file}/>
            <div>{props.title}</div>
        </FileDiv>
    </>
}

export default Docs;

const FileDiv = styled.div`
  img{
    width : 80px;
    height : 80px;
  }
`
