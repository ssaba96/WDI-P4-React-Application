import React from 'react';

const TalentsForm = ({ handleChange, handleSubmit, data }) => {
  console.log(data);
  return (

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <input className="input" name="name" placeholder="Name" onChange={handleChange} value={data.name || ''}/>
        {data.errors.name && <small>{data.errors.name}</small>}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" name="description" placeholder="Description" onChange={handleChange} value={data.description || ''} />
        {data.errors.description && <small>{data.errors.description}</small>}
      </div>
      <div className="field">
        <label className="label">Skills</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="skills" onChange={handleChange} value={data.skills || ''}>
              <option value="" disabled>Please choose</option>
              <option>HTML 5</option>
              <option>JavaScript</option>
              <option>React</option>
            </select>
          </div>
        </div>
        {data.errors.skills && <small>{data.errors.skills}</small>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''}/>
        {data.errors.image && <small>{data.errors.image}</small>}
      </div>

      <button className="button">Submit</button>
    </form>
  );
};

export default TalentsForm;
