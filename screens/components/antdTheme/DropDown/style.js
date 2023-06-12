import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  foldingBox: {
    position: 'relative',
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    lineHeight: 40,
  },
  foldingContent: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    height: 40,
    lineHeight: 40,
  },
  foldingIconBox: {
    position: 'relative',
    width: 20,
    height: 40,
    lineHeight: 40,
  },
  foldingText: {
    flex: 1,
    height: 40,
    lineHeight: 40,
  },
  foldListCon: {
    flex: 1,
    shadowColor: '#bfbfbf',
    shadowOffset:{w:10,h:10},
    shadowOpacity:0.1,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#595959',
    backgroundColor: 'rgba(89, 89, 89, 1)',
  },
  foldListChild: {
    flex: 1,
    height: 40,
    lineHeight: 40,
    color: '#000',
  },
  foldListChildBor: {
    backgroundColor: '#dbdbdb',
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 0.5,
  },

  foldingIconBottom: {
    position: 'absolute',
    top: 15,
    left: 5,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',

    borderTopWidth: 10,
    borderTopColor: '#8c8c8c',
    
    borderRightWidth: 5,
    borderRightColor: 'transparent',
  },
  foldingIconRight: {
    position: 'absolute',
    top: 15,
    left: 5,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderRightWidth: 10,
    borderRightColor: '#8c8c8c',

    borderTopWidth: 5,
    borderTopColor: 'transparent',
    
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  modalPosition: {
    position: 'absolute',
    top: 20,
    padding: 0,
  }
});