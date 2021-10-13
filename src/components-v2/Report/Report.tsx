import React, {useState} from 'react';

import {
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
} from '@material-ui/core';

import {tagOptions} from '../NSFWTags/default';
import {Modal} from '../atoms/Modal';
import {useStyles} from './Report.styles';

import {Comment} from 'src/interfaces/comment';
import {Post} from 'src/interfaces/post';

type ReportProps = {
  open: boolean;
  reference: Post | Comment;
  onConfirm: (selected: string[]) => void;
  onClose: () => void;
};

export const Report: React.FC<ReportProps> = props => {
  const {open, onClose, onConfirm} = props;
  const styles = useStyles();

  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSelectItem = (value: string) => () => {
    if (tags.includes(value)) {
      setTags(tags.filter(tag => tag !== value));
    } else {
      setTags(prevTags => [...prevTags, value]);
    }
  };

  const submitReport = () => {
    onConfirm(tags);
  };

  return (
    <Modal title="Report this post as" open={open} onClose={onClose}>
      <List dense={false} className={styles.list}>
        {tagOptions.map(option => (
          <ListItem
            key={option.id}
            button
            onClick={handleSelectItem(option.id)}
            selected={tags.includes(option.id)}>
            <ListItemText primary={option.title} />
          </ListItem>
        ))}
      </List>

      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="experience-description">Description</InputLabel>
        <OutlinedInput
          id="report-description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
          labelWidth={70}
        />
      </FormControl>

      <Button
        fullWidth
        disabled={tags.length === 0}
        variant="contained"
        color="primary"
        onClick={submitReport}>
        Confirm
      </Button>
    </Modal>
  );
};