 
const ClimbForm = ({handleChange, form}) => {

    const routeGrades = [
        '',
        '4a',
        '4b',
        '4c',
        '5a',
        '5b',
        '5c',
        '6a',
        '6b',
        '6c',
        '7a',
        '7b',
        '7c',
      ]; 
 
    return ( 
    <div>
         <div className='form-group'>
            <label htmlFor='date'>Data:</label>
            <input
              className='form-control'
              type='date'
              id='date'
              name='data'
              onChange={handleChange}
              value={form !== undefined ? form.data : ""}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='place' className='control-label mt-3'>
              Miejsce:
            </label>
            <input
              className='form-control'
              type='text'
              id='place'
              name='miejsce'
              onChange={handleChange}
              value={form !== undefined ? form.miejsce : ""}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='route' className='control-label mt-3'>
              Droga:
            </label>
            <input
              className='form-control'
              type='text'
              name='droga'
              id='route'
              onChange={handleChange}
              value={form !== undefined ? form.droga : ""}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='route' className='control-label mt-3'>
              Opis:
            </label>
            <textarea
              className='form-control'
              type='textarea'
              name='opis'
              rows='5'
              cols='30'
              id='opis'
              onChange={handleChange}
              value={form !== undefined ? form.opis : ""}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='grades' className='control-label mt-3 p-3'>
              Wycena:
            </label>
            <select name='wycena' onChange={handleChange} value={form !== undefined ? form.wycena : "" }>
              {routeGrades.map((option, index) => (
                <option name='wycena' value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
         
          </div>
          <div>
                <label htmlFor="files" className='btn btn-info aa'>Dodaj obraz</label> 
                <input id="files" name="picture" type="file" style={{visibility: 'hidden' }} onChange={handleChange}/>  
         </div>
    </div> 
    );
};
 
export default ClimbForm;