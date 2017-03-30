---
title: Life Science Training Material Specification
layout: post
author: rajido
permalink: /life-science-training-material-specification/
source-id: 1HG2fEjCoDUE4tn1XZ_ZIeWLEFXnI3YtS_FRIIFIbv-s
published: true
---
Life Science Training Material Specification 0.

*A specification for describing training materials in life sciences*

# Recommendation [DAY] [MONTH] 2016

This version: [github link]

Latest published version: [github link]

Previous version: [github link]

Editors: [Names]

Authors: [Names]

Contributors: [Names]

# Abstract

The Life Science Training Materials specification provides a way to describe bioscience training material on the World Wide Web. It defines a set of metadata and vocabularies, built on top of existing technologies and standards, that can be used to represent events in Web pages and applications. The goal of the specification is to make it easier to discover, exchange and integrate life science training material information across the Internet. 

# Status of this Document

This specification is under development. It is being written by a multi-institutional team from [ELIXIR](https://www.elixir-europe.org), [Pistoia Alliance](http://www.pistoiaalliance.org), [GOBLET](http://mygoblet.org), [TeSS](https://tess.elixir-uk.org), [BioSharing, EMBL-ABR](https://biosharing.org) and [BBMRI](http://bbmri-eric.eu/). You can find more about the project and similar projects on the [bioschemas GitHub pages](https://github.com/BioSchemas). If you are interested in helping with this or any other of the listed projects, please email training-material@bioschemas.org.

The document will be reviewed by the BioSchemas community, following the [Standard Specifications Process](https://docs.google.com/document/d/1eDHBfw6frl9xAjIduLYRwcqUY3jehfzJ-xSKCc1nSsc/edit?usp=sharing) defined by the community BioSchemas group.

The work proposed in this document builds on top of previous meetings and discussions involving the organisations mentioned above plus [ISCB](http://www.iscb.org) and [SIB](https://www.isb-sib.ch). It uses terms agreed during these meetings, and builds on existing standards outlined at [Schema.org](https://schema.org).

# Table of Contents

[[TOC]]

# Introduction

## **Problem statement**

Training materials tend to be dispersed in an unstructured way around the Internet. They are mainly available off manually crafted Web pages with a general lack of programmatic interfaces. Even though some training material providers make efforts to curate and structure their content, materials are still not described in a consistent manner that would make them easy to discover, exchange or compare programmatically. 

## **Proposed solution**

### **Rationale**

In the development of the Life Science Training Material standard we have considered the following design goals.

#### *Consensus*

Many organisations and repositories providing training materials already exist. It is important this standard takes into account their experience and contribution. 

#### *Adoption*

Many organisations already have a website or system providing information about training materials. They will not be willing to change their methods unless there is a clear benefit and a low barrier for adoption. 

#### *Reuse*

There are existing formats and technologies suitable to represent at least some information about training materials. This specification will avoid reinvention and seek to extend existing standards.

### **Goals**

The Life Science Training Material specification aims to support the description, discoverability, exchange and aggregation of the training material information in the life sciences. It will do this by working with the community to reach consensus on how to identify, describe and classify life science training materials. Components will include:

* a data model, 

* a minimum information guideline, 

* controlled vocabularies, and

* tools.

The specification is designed to be unintrusive to content providers, minimising changes to the methods organisations currently use to publish training materials. It aims to facilitate adoption by extending existing standards. The definition and classification of fields in the data model use standard specifications from [Schema.org](http://schema.org/), and the dissemination of information is facilitated by making use of standards like Microdata, JSON-LD and RDFa. Fields that require controlled vocabularies will specify existing ontologies where possible.

### **Scope**

The document is intended for:

* **software developers** who are working on projects that need to advertise or aggregate events, and

* **users** who want to understand how event data can be described and discovered using this standard.

# Data model

The data model is based on the standards set out in Schema.org and [previous discussions with the community](https://docs.google.com/spreadsheets/d/1cQ6mDbsG_cMX2EDAN8xH6-9yMRba8-rErlPeP8HTs8A/edit). [Schema.org](http://schema.org/) is a collaborative, community-driven project with a mission to create, maintain and promote schemas (types) for structured data on the Internet. These types (like Event, Person, Book) provide a standard for creating semantic markup in web pages and applications. 

Schema.org markup covers entities, relationships between entities and actions, and can easily be extended through a well-defined extension model. Over 10 million sites already use Schema.org to code their web pages, email messages, etc. Many applications from Google, Microsoft, Pinterest, Yandex and others also use Schema.org types. 

The data model proposed involves: 

1. **Adopting the Schema.org's C****reativeWork**** type for Training Materials**. Training materials can already be described using the Schema.org [CreativeWork](https://schema.org/CreativeWork) type.

2. **Adopting a standard way of using the Schema.org CreativeWork type.**** **Many properties in the Schema.org creativeWork type are loosely defined, and we propose guidleines on how to use them so that they are more specific and more appropriate for the life science context.** **For example, we suggest the use of a controlled vocabulary based on the EDAM ontology for the 'topics' property. We also suggest minimum fields to be included in any description of training materials because Schema.org does not support the concept of minimum fields. 

## **CreativeWork type definition**

### **Data fields**

Legend (these suggestions are not part of Schema.org):

*CN: Cardinality (one, many)*

*CG: Content Guideline (M: minimum; R: recommended; O: optional)*

*CV: Controlled Vocabulary*

Properties proposed for inclusion in LifeScienceTrainingMaterial standard are highlighted in green.

<table>
  <tr>
    <td>Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>CN</td>
    <td>CG</td>
    <td>CV</td>
  </tr>
  <tr>
    <td>Properties in schema.org/CreativeWork</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>about</td>
    <td>Thing </td>
    <td>The subject matter of the content.
As property: 'short description'.</td>
    <td>One</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>accessibilityAPI</td>
    <td>Text </td>
    <td>Indicates that the resource is compatible with the referenced accessibility API
(WebSchemas wiki lists possible values).</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>accessibilityControl</td>
    <td>Text </td>
    <td>Identifies input methods that are sufficient to fully control the described resource
(WebSchemas wiki lists possible values).</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>accessibilityFeature</td>
    <td>Text </td>
    <td>Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility
(WebSchemas wiki lists possible values).</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>accessibilityHazard</td>
    <td>Text </td>
    <td>A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3
(WebSchemas wiki lists possible values).</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>accountablePerson</td>
    <td>Person </td>
    <td>Specifies the Person that is legally accountable for the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>aggregateRating</td>
    <td>AggregateRating </td>
    <td>The overall rating, based on a collection of reviews or ratings, of the item.</td>
    <td>One</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>alternativeHeadline</td>
    <td>Text </td>
    <td>A secondary title of the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>associatedMedia</td>
    <td>MediaObject </td>
    <td>A media object that encodes this CreativeWork. This property is a synonym for encoding.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>audience</td>
    <td>Audience </td>
    <td>An intended audience, i.e. a group for whom something was created. Supersedes serviceAudience.
As property: ‘target audience’.</td>
    <td>Many</td>
    <td>M</td>
    <td>Yes(EDAM or something else?)</td>
  </tr>
  <tr>
    <td>audio</td>
    <td>AudioObject </td>
    <td>An embedded audio object.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>author</td>
    <td>Person or Organization</td>
    <td>The author of this content. Please note that author is special in that HTML5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.

As property: ‘author’.</td>
    <td>Many</td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td>award</td>
    <td>Text </td>
    <td>An award won by or for this item. Supersedes awards.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>character</td>
    <td>Person </td>
    <td>Fictional person connected with a creative work.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>citation</td>
    <td>Text or CreativeWork</td>
    <td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>comment</td>
    <td>Comment </td>
    <td>Comments, typically from users.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>commentCount</td>
    <td>Integer </td>
    <td>The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>contentLocation</td>
    <td>Place </td>
    <td>The location depicted or described in the content. For example, the location in a photograph or painting.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>contentRating</td>
    <td>Text </td>
    <td>Official rating of a piece of content—for example,'MPAA PG-13'.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>contributor</td>
    <td>Person or Organization</td>
    <td>A secondary contributor to the CreativeWork.

As property: ‘contributor’.</td>
    <td>Many</td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td>copyrightHolder</td>
    <td>Person or Organization</td>
    <td>The party holding the legal copyright to the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>copyrightYear </td>
    <td>Number</td>
    <td>The year during which the claimed copyright for the CreativeWork was first asserted.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>creator</td>
    <td>Person or Organization</td>
    <td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>dateCreated</td>
    <td>Date  or
DateTime</td>
    <td>The date on which the CreativeWork was created or the item was added to a DataFeed.

As property: ‘created date’.</td>
    <td>One</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>dateModified</td>
    <td>Date  or
DateTime</td>
    <td>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.

As property: ‘updated date’.</td>
    <td>One</td>
    <td>oM</td>
    <td></td>
  </tr>
  <tr>
    <td>datePublished</td>
    <td>Date</td>
    <td>Date of first broadcast/publication.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>discussionUrl</td>
    <td>URL </td>
    <td>A link to the page containing the comments of the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>editor</td>
    <td>Person </td>
    <td>Specifies the Person who edited the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>educationalAlignment</td>
    <td>AlignmentObject </td>
    <td>An alignment to an established educational framework.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>educationalUse</td>
    <td>Text </td>
    <td>The purpose of a work in the context of education; for example, 'assignment', 'group work'.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>encoding</td>
    <td>MediaObject </td>
    <td>A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. Supersedes encodings.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>exampleOfWork</td>
    <td>CreativeWork</td>
    <td>A creative work that this work is an example/instance/realization/derivation of.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>fileFormat</td>
    <td>Text </td>
    <td>Media type (aka MIME format, see IANA site) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>genre</td>
    <td>Text or URL</td>
    <td>Genre of the creative work or group.

As property: ‘scientific topic’.</td>
    <td>Many</td>
    <td>M</td>
    <td>Yes (EDAM)</td>
  </tr>
  <tr>
    <td>hasPart</td>
    <td>CreativeWork</td>
    <td>Indicates a CreativeWork that is (in some sense) a part of this CreativeWork. Inverse property: isPartOf.

As property: ‘contains’.</td>
    <td>Many</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>headline</td>
    <td>Text </td>
    <td>Headline of the article.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>inLanguage</td>
    <td>Text  or
Language
</td>
    <td>The language of the content or performance or used in an action. Please use one of the language codes from the IETF BCP 47 standard. Supersedes language.

As property: ‘language’. Defaults to English if not present.</td>
    <td>One</td>
    <td>O</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>interactionStatistic</td>
    <td>InteractionCounter </td>
    <td>The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. Supersedes interactionCount.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>interactivityType</td>
    <td>Text </td>
    <td>The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>isBasedOnUrl</td>
    <td>URL </td>
    <td>A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>isFamilyFriendly</td>
    <td>Boolean </td>
    <td>Indicates whether this content is family friendly.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>isPartOf</td>
    <td>CreativeWork</td>
    <td>Indicates a CreativeWork that this CreativeWork is (in some sense) part of.
Inverse property: hasPart.

As property: ‘part of’.</td>
    <td>Many</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>Text</td>
    <td>Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.

As property: ‘keywords’.</td>
    <td>Many</td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td>learningResourceType</td>
    <td>Text </td>
    <td>The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.

As property: ‘type’.</td>
    <td>Many</td>
    <td>O</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>license</td>
    <td>URL  or
CreativeWork</td>
    <td>A license document that applies to this content, typically indicated by URL.

As property: ‘license’.</td>
    <td>One</td>
    <td>R</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>locationCreated</td>
    <td>Place </td>
    <td>The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mainEntity</td>
    <td>Thing</td>
    <td>Indicates the primary entity described in some page or other CreativeWork.
Inverse property: mainEntityOfPage.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mentions</td>
    <td>Thing </td>
    <td>Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.

As property: ‘additional resource’. Can be used to link additional resources, such as datasets, tools, etc.</td>
    <td>Many</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>offers</td>
    <td>Offer </td>
    <td>An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>position</td>
    <td>Integer  or
Text
</td>
    <td>The position of an item in a series or sequence of items.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>producer</td>
    <td>Organization  or
Person</td>
    <td>The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>provider</td>
    <td>Organization  or
Person
</td>
    <td>The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. Supersedes carrier.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>publication</td>
    <td>PublicationEvent </td>
    <td>A publication event associated with the item.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>publisher</td>
    <td>Organization  or
Person</td>
    <td>The publisher of the creative work.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>publishingPrinciples</td>
    <td>URL </td>
    <td>Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>recordedAt</td>
    <td>Event
</td>
    <td>The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
Inverse property: recordedIn.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>releasedEvent</td>
    <td>PublicationEvent </td>
    <td>The place and time the release was issued, expressed as a PublicationEvent.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>review</td>
    <td>Review </td>
    <td>A review of the item. Supersedes reviews.

As property: ‘review’.</td>
    <td>Many</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>schemaVersion</td>
    <td>Text  or
URL
</td>
    <td>Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using a URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application. </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>sourceOrganization</td>
    <td>Organization </td>
    <td>The Organization on whose behalf the creator was working.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>text</td>
    <td>Text </td>
    <td>The textual content of this CreativeWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>thumbnailUrl</td>
    <td>URL </td>
    <td>A thumbnail image relevant to the Thing.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>timeRequired</td>
    <td>Duration </td>
    <td>Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.

As property: ‘duration’.</td>
    <td>One</td>
    <td>O</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>translator</td>
    <td>Organization  or
Person</td>
    <td>Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market.
</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>typicalAgeRange</td>
    <td>Text </td>
    <td>The typical expected age range, e.g. '7-9', '11-'.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>version</td>
    <td>Number </td>
    <td>The version of the CreativeWork embodied by a specified resource.

As property: ‘version’.</td>
    <td>One</td>
    <td>O</td>
    <td>
</td>
  </tr>
  <tr>
    <td>video</td>
    <td>VideoObject </td>
    <td>An embedded video object.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>workExample </td>
    <td>CreativeWork </td>
    <td>Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
Inverse property: exampleOfWork.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Possible additions to CreativeWork</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>pid</td>
    <td>Text</td>
    <td>Permanent identifier, such as DOIs.</td>
    <td>One</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>level</td>
    <td>???</td>
    <td>Difficulty level; level of experience of users in the subject.
As property: ‘difficulty level’.</td>
    <td>One</td>
    <td>R</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Properties inherited from schema.org/Thing</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>additionalType</td>
    <td>URL</td>
    <td>An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>alternateName</td>
    <td>Text</td>
    <td>An alias for the item.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>A short description of the item.

As property: ‘long description’.</td>
    <td>One</td>
    <td>R</td>
    <td></td>
  </tr>
  <tr>
    <td>image</td>
    <td>ImageObject  or URL</td>
    <td>An image of the item. This can be a URL or a fully described ImageObject.Inverse property: mainEntity.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mainEntityOfPage</td>
    <td>CreativeWork  or URL</td>
    <td>Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property: mainEntity.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>name</td>
    <td>Text</td>
    <td>The name of the item.

As property: ‘title’.</td>
    <td>One</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>potentialAction</td>
    <td>Action</td>
    <td>Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>sameAs</td>
    <td>URL</td>
    <td>URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.

As property: ‘same as’.</td>
    <td>One</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>url</td>
    <td>URL</td>
    <td>URL of the item.

As property: ‘url’.</td>
    <td>Many</td>
    <td>R</td>
    <td></td>
  </tr>
</table>


Here is an example snippet showing the attributes you can use on a LifeScienceTrainingMaterial. For complete examples see the "Further examples" section at the end of this document.

<table>
  <tr>
    <td>Example 1. Basic use of the creativeWork type for life science training materials</td>
  </tr>
  <tr>
    <td><div itemscope itemtype="http://schema.org/creativeWork">
<meta itemprop="genre" content="trainingMaterial">
<div itemprop="name">Bioinformatics resources for protein biology</div>
<div itemprop="description">A Powerpoint show and a Wiki page of links to introduce data resources and tools that can help undergraduate students study proteins.</div>
<div>Contains: <span itemprop="learningResourceType">Presentation</span>,
<span itemprop="learningResourceType">Website</span>
</div>
<div>Created: <meta itemprop="dateCreated" content="2015-04-15T">14 April 2015</div>
      <div>Author: 
<div itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">Dr Jane Doe</span>
</div>
</div>
…
</div></td>
  </tr>
</table>


### **Controlled Vocabularies (CV)**

Some data fields suggest the use of controlled vocabularies or enumerations. We will rely on existing vocabularies and ontologies wherever possible but define new collections of terms for very specific purposes as required.

This section contains a list of fields that require a controlled vocabulary, enumeration or an ontology term, and specifies what is acceptable for each. The fields involved are:

* audience ('*target audience'*)

*Must** be* one of the[ EDAM Topic](http://edamontology.org/topic_0003) class values.

* genre ('*scientific topic'*)

*Must be* one of the[ EDAM Topic](http://edamontology.org/topic_0003) class values.

* inLanguage (*'language'*)*Should be* blank or one of the language codes defined by the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).

* learningResourceType ('*type'*)

*Should be* blank or one of:

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>text</td>
    <td>Training material in textual form</td>
  </tr>
  <tr>
    <td>handout</td>
    <td>Training material handout suitable for printing</td>
  </tr>
  <tr>
    <td>video</td>
    <td>Training material in video format</td>
  </tr>
  <tr>
    <td>presentation</td>
    <td>Training material as slides</td>
  </tr>
  <tr>
    <td>exercise files</td>
    <td></td>
  </tr>
  <tr>
    <td>scripts</td>
    <td></td>
  </tr>
  <tr>
    <td>...</td>
    <td></td>
  </tr>
</table>


* license ('license')*Should* be blank or one of licences defined by [Open Definition Licenses Service](http://licenses.opendefinition.org/). 

* timeRequired (*'duration'*)

*Should be* blank or a duration as defined by the [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). 

* level (*'difficulty level'*)

*Should be* blank or one of:

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>beginner</td>
    <td>Lowest level of difficulty; suitable for beginners on the topic.</td>
  </tr>
  <tr>
    <td>intermediate</td>
    <td>Intermediate level of difficulty; suitable for people who already have some knowledge of the topic.</td>
  </tr>
  <tr>
    <td>advanced</td>
    <td>Highest level of difficulty; suitable for people who have substantial knowledge of the topic.</td>
  </tr>
</table>


### **Content Guidelines (CG)**

To make it as easy as possible to implement a basic LifeScienceTrainingMaterial model, we suggest a very small set of minimum (M) fields to include. For optimal discovery and integration we suggest some additional recommended (R) fields. All other fields are optional (O), but if included will enhance the user experience.

Fields that *must be* present (M) in order to comply with the specification are:

* name (*'title'*)

* about (*'short description*')

* genre ('*scientific topic*')

* audience ('*target audience*')

* dateModified ('*updated date*'’)

* sameAs (*'url'*)

### **Cardinality**

The Schema.org specification permits any field to be included any number of times. Whether this is desirable depends on the context and intended use of the data. This specification includes suggestions as to the cardinality of selected fields, as indicated in the data model table above.

The table notates cardinalities in the following way:

<table>
  <tr>
    <td>Notation</td>
    <td>Definition</td>
  </tr>
  <tr>
    <td>One</td>
    <td>There may only be a maximum of one instance of this property type. For example, an event may only have a maximum of one start date.</td>
  </tr>
  <tr>
    <td>Many</td>
    <td>There can be multiple instances of this property type. For example, there may be more than one sponsor of an event.</td>
  </tr>
</table>


<table>
  <tr>
    <td>Example 2. Cardinality in Training Material </td>
  </tr>
  <tr>
    <td><div itemscope itemtype="http://schema.org/creativeWork">
<meta itemprop="genre" content="trainingMaterial">
...
<!-- Only one timeRequired allowed -->
<div>Time required:
<span itemprop="timeRequired" content="P3M">Three months</span>
</div>
<!-- Multiple authors allowed -->
<div>Authors: 
<div itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">Jane Doe</span>
</div>,
<div itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">John Smith</span>
</div>
</div>
...
</div></td>
  </tr>
</table>


*An example of a property type with multiple cardinality (eventType) and single cardinality (startDate).*

### **Identifiers**

TBD

## **Implementation Guidelines**

Schema.org[ suggests](http://schema.org/docs/gs.html) implementing metadata, including the LifeScienceTrainingMaterial specification, using Microdata, RDFa, or JSON-LD. Depending on the context, any of these can be used for embedding compliant event data in an event provider's web pages or other online resources and services.

### **Microdata**

Microdata can be used for embedding properties from the specification directly into existing web pages and HTML tags to enrich event descriptions. This microdata can be extracted and further processed by search engines and other applications, but does not affect the 'look and feel' of the web page it is embedded in. Using microdata is the easiest method of implementing the specification, as it requires minimal intervention on event providers’ part. Example below depicts the use of microdata within HTML tags.

<table>
  <tr>
    <td>Example 3. Training materials marked up using microdata within HTML</td>
  </tr>
  <tr>
    <td><div itemscope itemtype="http://schema.org/creativeWork">
<meta itemprop="genre" content="trainingMaterial">
<div itemprop="name">Python for Life Scientists</div>
<div itemprop="description">A five-day course covering basic programming concepts in Python. The course includes exercises with practical examples taken from the life sciences.</div>
<div>Event type: 
<span itemprop="eventType">Workshops and courses</span>
</div>
<div>Author: 
<div itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">Jane Doe</span>
</div>
</div>
<div>Time required:
<span itemprop="timeRequired" content="P5W">Five weeks</span>
</div>
<div>Material: 
<span itemprop="learningResourceType">presentation</span>,
<span itemprop="learningResourceType">exercise files</span>, 
<span itemprop="learningResourceType">scripts</span>
</div>
  ...
</div></td>
  </tr>
</table>


For more information, please refer to the[ Microdata Guide on Schema.org](https://schema.org/docs/gs.html).

### **RDFa**

[RDFa](https://en.wikipedia.org/wiki/RDFa) (or[ Resource Description Framework](https://en.wikipedia.org/wiki/Resource_Description_Framework) in Attributes[[1]](https://en.wikipedia.org/wiki/RDFa#cite_note-n-1)) is a[ W3C](https://en.wikipedia.org/wiki/W3C) Recommendation that adds a set of attribute-level extensions to[ HTML](https://en.wikipedia.org/wiki/HTML),[ XHTML](https://en.wikipedia.org/wiki/XHTML) and various XML-based document types for embedding rich[ metadata](https://en.wikipedia.org/wiki/Metadata) within web documents. Example below explains the use of RDFa within HTML tags.

<table>
  <tr>
    <td>Example 4. Training materials marked up using RDFa within HTML</td>
  </tr>
  <tr>
    <td><div vocab="http://schema.org/" typeof="creativeWork">
<meta property="genre" content="trainingMaterial">
<div property="name">Python for Life Scientists</div>
<div property="description">A five-day course covering basic programming concepts in Python. The course includes exercises with practical examples taken from the life sciences.</div>
<div>Author: 
<div property="author" typeof="person">
<span property="name">Jane Doe</span>
</div>
</div>
<div>Time required:
<span property="timeRequired" content="P5W">Five weeks</span>
</div>
<div>Material: 
<span property="learningResourceType">presentation</span>,
<span property="learningResourceType">exercise files</span>, 
<span property="learningResourceType">scripts</span>
</div>
  ...
</div></td>
  </tr>
</table>


For more information, please refer to the[ RDFa wiki](http://rdfa.info/).

### **JSON-LD**

[JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) (JavaScript Object Notation for Linked Data), is a method of transporting[ Linked Data](https://en.wikipedia.org/wiki/Linked_Data) using[ JSON](https://en.wikipedia.org/wiki/JSON). Example below represents a LifeScienceTrainingMaterial described in JSON-LD format.

<table>
  <tr>
    <td>Example 5. Training materials marked up in JSON-LD</td>
  </tr>
  <tr>
    <td><script type="application/ld+json">
{
"@context": "http://schema.org/",
"@type": "creativeWork",
"genre": "trainingMaterial",
"name": "Python for Life Scientists",
"description": "A five-day course covering basic programming concepts in Python. The course includes exercises with practical examples taken from the life sciences.",
"author": {
"@type": "Person",
"name": "Jane Doe"
},
"timeRequired": "P5W",
"learningResourceType": "presentation",
"learningResourceType": "exercise files",
"learningResourceType": "scripts"
 ...
}
</script></td>
  </tr>
</table>


For more information, please refer to the[ JSON-LD specification](http://www.w3.org/TR/json-ld/).

# **Glossary**

<table>
  <tr>
    <td>Term</td>
    <td>Definition</td>
  </tr>
  <tr>
    <td>Ontology/Controlled vocabulary</td>
    <td>For the purposes of this document the terms ontology and controlled vocabulary are interchangeable. Wikipedia defines ontologies as:
"In computer science and information science, an ontology is a formal naming and definition of the types, properties, and interrelationships of the entities that really or fundamentally exist for a particular domain of discourse. It is thus a practical application of philosophical ontology, with a taxonomy."</td>
  </tr>
  <tr>
    <td>EDAM ontology</td>
    <td>EDAM ontology is one of the ontologies available in the life sciences domain, for classifying and describing bioinformatics operations, types of data, formats, and scientific topics.</td>
  </tr>
  <tr>
    <td>EDAM ontology topic</td>
    <td>EDAM ontology topics describe general bioinformatics subjects or categories, such as a field of study, data, processing, analysis or technology - starting from very general terms such as “biology” and “bioinformatics” to more specific ones such as "sequence analysis", "alignment", "sequencing", "microarrays", etc.</td>
  </tr>
</table>


# **Further examples**

<table>
  <tr>
    <td>Example 6. Training material containing all the minimum (M) fields</td>
  </tr>
  <tr>
    <td>Microdata:


RDFa:


JSON-LD:

</td>
  </tr>
</table>


