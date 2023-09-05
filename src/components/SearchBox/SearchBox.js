import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Form, Field, BtnWrap, LabelBtn } from '../SearchBox/SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const handelSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '' }} onSubmit={handelSubmit}>
      <Form autoComplete="off">
        <BtnWrap type="submit"></BtnWrap>
        <LabelBtn>Search</LabelBtn>
        <label>
          <Field name="title" type="text" placeholder="Search movies" />
        </label>
      </Form>
    </Formik>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
