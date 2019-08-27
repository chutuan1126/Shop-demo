import React from 'react';
import './collection-preview.styles.css';
import CollectionItem from '../Collection_Item/Colletion_Item';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 id={title}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;