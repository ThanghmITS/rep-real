import React, { useState } from 'react';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const TriStateCheckboxDemo = () => {
  const [value, setValue] = useState<boolean | null | undefined>(null);

  return (
    <div>
      <h1>Tôi chỉ sử dụng bình thường thôi</h1>
      <div className="card">
        <div className="field-checkbox m-0">
          <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
          <label>{String(value)}</label>
        </div>
      </div>
    </div>
  );
};

export default TriStateCheckboxDemo;
