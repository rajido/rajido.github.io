---
title: _Bioschemas specification template_
layout: post
author: rajido
permalink: /_bioschemas-specification-template_/
source-id: 1p_VL320lJZy1J7e9RlpUob_5itA84YjFITOyy39Axmo
published: true
---
[type] specification [version]

Bioschemas specification for describing [type] in the life-science

[One paragraph description]

[References to supporting information like "use cases", “bioschemas mapping” and “schema.org posted issues”]

# Properties

Based on schema.org [type]

<table>
  <tr>
    <td>Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>CN</td>
    <td>MG</td>
    <td>CV</td>
  </tr>
  <tr>
    <td>[schema.org property name]</td>
    <td>[schema.org property type]</td>
    <td>[schema.org description] [bioschemas clarification if needed]</td>
    <td>[one | many]</td>
    <td>M</td>
    <td>[yes |no]</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>New proporties</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>[custom name or schema.org property name if present in other type]</td>
    <td>[schema.org property type]</td>
    <td>[bioschemas description]</td>
    <td>[one | many]</td>
    <td>[M |R | O]</td>
    <td>[yes |no]</td>
  </tr>
</table>


**Legend:		***CN: Cardinality (one, many)*

*MG: Marginality (**M: minimum**; **R: recommended**; O: optional)*

*CV: Suggested controlled vocabularies (yes, no)*

# Examples

Schema.org[ suggests](http://schema.org/docs/gs.html) implementing metadata using JSON-LD, RDFa or Microdata. JSON-LD is the recommended format by Google, but any of these formats can be used for embedding information about tools in a web page or other online resource.

<table>
  <tr>
    <td>Example 1 - [format: RDFa | JSON-LD | Microdata].  [Example description. Eg: Using minimum fields]</td>
  </tr>
  <tr>
    <td><div itemscope itemtype="http://schema.org/[type]">
      <div itemprop="id">[id]</div>
	<div itemprop="name">[name]</div>
	<div itemprop="description">[description]</div>
	...
</div></td>
  </tr>
</table>


# Controlled Vocabularies

This section contains a list of fields that require a controlled vocabulary or enumeration and suggests what is acceptable for each. 

## [Property]

[Please provide a list of suggested controlled vocabularies or a list of suggested enumerations. For controlled vocabularies include references or links to the vocabulary or branch within the vocabulary. Eg: [EDAM Topic](http://edamontology.org/topic_0003). For enumerations include values and value descriptions]

