import { useSelector, useDispatch } from "react-redux";
import DOMPurify from 'dompurify';
import { selectInterestPoint} from 'src/actions/mapSettings';

import {
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
  } from '@mui/material';

import list from 'src/data/categories.json'


function choicesPanel() {
    const depart = useSelector ((state) => state.mapSettings.localisationSettingsModal.DepartSelected.label)
    const arrivée = useSelector ((state) => state.mapSettings.localisationSettingsModal.ArrivSelected.label)
    const selected = useSelector((state) => state.mapSettings.interestPointModal.selected);
    const dispatch = useDispatch();
    return (
        <div className="choices">
            <div className="locations">
           départ : {depart} <br />
           arrivée : {arrivée}
           </div>
           <div interest>
          <FormGroup>
            {list.map((option) => (
              <FormControlLabel
                key={option.name}
                sx={{ color: 'black' }}
                control={(
                  <Checkbox
                    checked={Boolean(selected.find((select) => select.name === option.name))}
                    onChange={(event) => dispatch(selectInterestPoint(event.target.checked, option))}
                    name={option.name}
                    sx={{
                      '&.Mui-checked': {
                        color: '#6cc573',
                      },
                    }}
                  />
              )}
                label={DOMPurify.sanitize(option.name, { USE_PROFILES: { html: false } })}
              />
            ))}
          </FormGroup>
           </div>
        </div>
    );
}

export default choicesPanel;