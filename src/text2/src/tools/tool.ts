import { TagDoc, baseType } from '../types/tag-doc';
import { TagDocOld } from '../types/tag-doc-old';

export function tableToJson(table: any) {
  var data = [];
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
  }
  for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData: any = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    data.push(rowData);
  }
  return data;
}

export function getNewDocAll(docAll: TagDocOld.TagDocInstance) {
  const newData: TagDoc.TagDocInstance = { url: '' };
  for (const key in docAll) {
    const element = docAll[key as keyof TagDocOld.TagDocInstance]!;
    if (key === 'attributes') {
      newData.attributes = getAttributes(element as TagDocOld.Attribute[]);
    }
    if (key === 'events') {
      newData.events = getEvents(element as TagDocOld.Event[]);
    }
    if (key === 'slots') {
      newData.slots = getSlots(element as TagDocOld.Slot[]);
    }
    if (key === 'exposes') {
      newData.exposes = getExposes(element as TagDocOld.Expose[]);
    }
  }
  return newData;
}

function getAttributes(attributes: TagDocOld.Attribute[]): TagDoc.Attribute[] {
  const newList: TagDoc.Attribute[] = [];

  attributes.forEach((item) => {
    const data = getType(item.Type);
    newList.push({
      name: item.Name,
      description: getDescription(item.Description),
      type: data.type,
      default: item.Default,
      value: data.value,
    });
  });

  return newList;
}

function getEvents(attributes: TagDocOld.Event[]): TagDoc.Event[] {
  const newList: TagDoc.Event[] = [];
  attributes.forEach((item) => {
    const data = getType(item.Type);
    newList.push({
      name: item.Name,
      description: getDescription(item.Description),
      type: data.type as 'function',
      tsType: '',
    });
  });

  return newList;
}
function getSlots(attributes: TagDocOld.Slot[]): TagDoc.Slot[] {
  const newList: TagDoc.Slot[] = [];
  attributes.forEach((item) => {
    newList.push({
      name: item.Name,
      description: getDescription(item.Description),
    });
  });

  return newList;
}
function getExposes(attributes: TagDocOld.Expose[]): TagDoc.Expose[] {
  const newList: TagDoc.Expose[] = [];
  attributes.forEach((item) => {
    const data = getType(item.Type);
    newList.push({
      name: item.Name,
      description: getDescription(item.Description),
      type: data.type as 'object' | 'function',
      tsType: '',
    });
  });

  return newList;
}

function getDescription(description: string) {
  return {
    cn: description || '',
    en: description || '',
  };
}

function getType(type: string) {
  const newType: string[] = [];
  let newValue: string[] = [];
  const typeArr = type.split(']');
  if (typeArr.length > 0) {
    newType.push(typeArr[0]!.toLowerCase().replace('^[', ''));
    if (typeArr.length > 1) {
      const val = typeArr[1]!.replace(/[^\w-|]/g, '');
      newValue = val.split('|');
    }
  } else {
    newType.push('aaaaaaaaaaaaaaaaaaaaa');
  }

  return {
    type: (newType.length === 1 ? newType[0] : newType) as baseType | ['string', 'Component'],
    value: newValue,
  };
}
