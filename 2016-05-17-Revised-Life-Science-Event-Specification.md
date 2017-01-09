---
title: Event Specification
layout: post
author: rajido
permalink: /revised-life-science-event-specification/
source-id: 12O8gsOuH2qHKpis6vTHxXExraNH5XZEnoilwNgWWgaQ
published: true
---
Bioschemas Event Specification

Bioschemas specification for describing events in the life-science.

This document describes the Bioschemas Event vocabulary with some examples of how it can be used. The vocabulary is based off the schema.org [http://schema.org/Event](http://schema.org/Event) vocabulary. It can be used to describe such things as Courses, Workshops, Meetings, and Conferences. It is intended for webmasters and content managers. 

<table>
  <tr>
    <td>Note: the new properties proposed in this document have been posted to the Schema.org issues.</td>
  </tr>
</table>


## Mandatory Fields

The mandatory fields are the most significant criteria search engines use to locate events, and as such must be implemented to improve your searchability. They are also the minimum information required for an event to be included in a registry, for example the [TeSS Training registry](http://tess.elixir-uk.org). 

<table>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td><script type="application/ld+json">
{
"@context": "http://schema.org/",
"@type": "Event",
"name": "Epigenomics of Common Diseases",
"startDate": "2017-04-15T",
"endDate": "2017-04-16T",
"description": "This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics.",
"location": {
  "@type": "Place",
  "name": "University of Manchester",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "581 Oxford Road",
    "addressCountry": "United Kingdom",
    "addressRegion": "Manchester",
    "postalCode": "M13 9PL" 
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-12.203029",
    "longitude": "42.203021"
  }
},
"eventType": "Workshops and courses"
}
</script></td>
  </tr>
</table>


This is the table describing the properties. Please note, the right hand column is the cardinality (number of times in which a property can occur). *1 *indicates a property may occur a maximum of once, *m* permits multiple instances. An asterisk (*) next to an expected type means the term must be from a[ controlled vocabulary, ](#heading=h.fq8ulvsezu6a)the available options of which are listed lower down the page.

<table>
  <tr>
    <td>Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>CN</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Text</td>
    <td>The name of the item</td>
    <td>m</td>
  </tr>
  <tr>
    <td>startDate</td>
    <td>Date</td>
    <td>The start date and time of the item (in ISO 8601 date format).</td>
    <td>1</td>
  </tr>
  <tr>
    <td>endDate</td>
    <td>Date</td>
    <td>The end date and time of the item (in ISO 8601 date format).</td>
    <td>1</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>A short description of the item.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Text or Place or PostalAddress</td>
    <td>The location of the event. It is recommended to use Place, and within Place present the PostalAddress and GeoCoordinates</td>
    <td>1</td>
  </tr>
  <tr>
    <td>contact</td>
    <td>Organization or Person
</td>
    <td>Main point of contact that can be contacted for general queries. This would be an event organiser or an administrator.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>hostInstitution</td>
    <td>Organization</td>
    <td>The organization or institution responsible for hosting the event (not necessarily responsible for organizing). </td>
    <td>m</td>
  </tr>
  <tr>
    <td>eventType</td>
    <td>EventType*</td>
    <td>This can be one of 4 options. Please see the EventType controlled vocabulary listed below for the range of options</td>
    <td>m</td>
  </tr>
</table>


## Recommended Fields

Recommended fields aren't necessary but are encouraged to help people find your resources. The ordering is from the most to least strongly recommended.  

<table>
  <tr>
    <td>Append to Mandatory example before the final </script> tag </td>
  </tr>
  <tr>
    <td>"url": "https://coursesandconferences.wellcomegenomecampus.org/events/item.aspx?e=594",
"keywords": [
	"epigenomics", "conference", "EpiGenCon", "bioinformatics", "genetics", "genomics" 
],
"topic": ["Genomics", "Bioinformatics", "Epigenomics"],
"targetAudience": ["Genomics", "Bioinformatics", "Epigenomics"],
"programme": "https://coursesandconferences.wellcomegenomecampus.org/events/item.aspx?e=594",
"deadline": ["The deadline for posters is the 3rd of September. The deadline for presentations is the 18th of August."],
"prerequisites": [],
"capacity": 200,
"eligibility": ["First come, first served"],
"alternateName": "EpiGenCon", 
"accreditation": {
  "@type": "Organization",
  "name" : "Wellcome Trust" 
}

</td>
  </tr>
</table>


This is the table describing the properties.

<table>
  <tr>
    <td>Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>CN</td>
  </tr>
  <tr>
    <td>url</td>
    <td>URL</td>
    <td>URL of the item. If this is not present it will be inferred by the page the metadata was sourced from. It is recommended you specify the URL even if it is the same. </td>
    <td>1</td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>Text</td>
    <td>Free text keywords to describe the event. </td>
    <td>m</td>
  </tr>
  <tr>
    <td>Topic</td>
    <td>Topic</td>
    <td>The scientific topic the event is about. This should be links to ontology terms. See the Topic guidelines for examples and guidance</td>
    <td>m</td>
  </tr>
  <tr>
    <td>TargetAudience</td>
    <td>TargetAudience*</td>
    <td>The scientific background the participants should be from. This should be links to ontology terms. See the TargetAudience guidelines for examples and guidance</td>
    <td>m</td>
  </tr>
  <tr>
    <td>programme</td>
    <td>Text or URL</td>
    <td>A plan or schedule of activities or procedures to be followed.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>deadline</td>
    <td>Text</td>
    <td>Deadlines dates for this event e.g. application deadline, poster submission, paper submission, early registration.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>prerequisite</td>
    <td>Text</td>
    <td>A list of prerequisites to be able to attend the event.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>capacity</td>
    <td>Integer</td>
    <td>Available number of spaces</td>
    <td>1</td>
  </tr>
  <tr>
    <td>eligibility</td>
    <td>Text or Eligibility* </td>
    <td>Defines the type of eligibility to attend this event e.g first come first served.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>alternateName</td>
    <td>Text</td>
    <td>An alias for the item. Can be used for the subtitle of the event.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>accreditation</td>
    <td>Organization or Text</td>
    <td>Type of accreditation or organisation that accredits the event.</td>
    <td>1</td>
  </tr>
</table>


## Optional Fields

Optional fields tend to be quite specific and may not help people discover your event. They could help them determine whether or not the event is useful for them and provide useful information.

<table>
  <tr>
    <td>Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>CN</td>
  </tr>
  <tr>
    <td>sponsor</td>
    <td>Organization</td>
    <td>The organization or institutions providing sponsorship for the event.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>registrationStatus</td>
    <td>RegistrationStatus *</td>
    <td>Enumerative type displaying the status of registration for an event. See the notes below.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>socialMedia</td>
    <td>URL</td>
    <td>Link to social media websites like twitter or facebook.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>performer</td>
    <td>Organization or Person</td>
    <td>A performer at the event—for example, a presenter, musician, musical group or actor. Supersedesperformers.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>offers</td>
    <td>Offer</td>
    <td>An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. Can use eligibleCustomerType and eligibleDuration properties to express any special offers.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>review</td>
    <td>Review</td>
    <td>A review of the item. Supersedes reviews.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>subEvent</td>
    <td>Event</td>
    <td>An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. Supersedes subEvents.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>superEvent</td>
    <td>Event</td>
    <td>An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>eventId</td>
    <td>Text</td>
    <td>Unique Id for the event.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>attachment</td>
    <td>URL</td>
    <td>Any files or related websites which give more information about this event. e.g. flyers, third party sites handling tickets.</td>
    <td>m</td>
  </tr>
  <tr>
    <td>lastUpdate</td>
    <td>Date</td>
    <td>Date when the event was last modified.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>submitter</td>
    <td>Organization or Person</td>
    <td>The person or organization who submits an event to a repository or registry of events (such as iAnn, ISCB ).</td>
    <td>m</td>
  </tr>
  <tr>
    <td>acceptanceNotificationDate</td>
    <td>Date</td>
    <td>Date for the host to confirm acceptance to applicants.</td>
    <td>m</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


Here is an example snippet showing the attributes you can use on an Event. For complete examples see the "Further examples" section at the end of this document.

# Controlled Vocabularies (CV)

Some data fields suggest the use of controlled vocabularies or enumerations. This section contains a list of fields that require a controlled vocabulary, enumeration or an ontology term, and specifies what is acceptable for each. 

## Event Type

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Workshops and courses</td>
    <td>A workshop or a course event</td>
  </tr>
  <tr>
    <td>Meetings and conferences</td>
    <td>A meeting or a conference event</td>
  </tr>
  <tr>
    <td>Receptions and networking</td>
    <td>A reception or a networking event</td>
  </tr>
  <tr>
    <td>Awards and prizegivings</td>
    <td>An award or a prize giving event</td>
  </tr>
</table>


		

## Topic

*Should be* a reference to an ontology term that defines a scientific topic. For example, an [EDAM Topic](http://edamontology.org/topic_0003). 

## Target Audience

*Should be* blank or a reference to an ontology term that defines a scientific topic, for example an [EDAM Topic](http://edamontology.org/topic_0003). *TargetAudience* defines who should attend whereas *Topic* defines the content. For example if the event is a statistics training session for biologists, then the *TargetAudience* would be *Biology* and *Topic* would be *Statistics*. If it is an event for geneticists about genetics then both *Topic* and *TargetAudience* would be *Genetics*.

## Eligibility

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>First come first served </td>
    <td>Registrations will be accepted in the order received</td>
  </tr>
  <tr>
    <td>Registration of interest</td>
    <td>The organisers will select successful registrants from a list of interested parties</td>
  </tr>
  <tr>
    <td>By invitation</td>
    <td>Only invited parties may register (this option may be used on its own or in conjunction with either of the others by specifying both values, e.g. for an event where people are individually invited but only the first X will be able to register)</td>
  </tr>
</table>


## Registration Status

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Proposed</td>
    <td>Currently being planned, not yet confirmed</td>
  </tr>
  <tr>
    <td>Pre-open</td>
    <td>Confirmed but not yet open for registration</td>
  </tr>
  <tr>
    <td>Open</td>
    <td>Open for registration</td>
  </tr>
  <tr>
    <td>Cancelled</td>
    <td>Cancelled</td>
  </tr>
  <tr>
    <td>Full</td>
    <td>Fully booked</td>
  </tr>
</table>


## Event Status

<table>
  <tr>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>EventCancelled</td>
    <td>Event cancelled</td>
  </tr>
  <tr>
    <td>EventPostponed</td>
    <td>Event postponed</td>
  </tr>
  <tr>
    <td>EventRescheduled</td>
    <td>Event rescheduled</td>
  </tr>
  <tr>
    <td>EventScheduled</td>
    <td>Event happening</td>
  </tr>
</table>


### Identifiers

TBD

## Implementation Guidelines

Schema.org [suggests](http://schema.org/docs/gs.html) implementing metadata, including the Event specification, using Microdata, RDFa, or JSON-LD. Depending on the context, any of these can be used for embedding compliant event data in an event provider's web pages or other online resources and services.

### Microdata

Microdata can be used for embedding properties from the specification directly into existing web pages and HTML tags to enrich event descriptions. This microdata can be extracted and further processed by search engines and other applications, but does not affect the 'look and feel' of the web page it is embedded in. Using microdata is the easiest method of implementing the specification, as it requires minimal intervention on event providers’ part. Example below depicts the use of microdata within HTML tags. 

<table>
  <tr>
    <td>Example 3. Embedding Event properties as microdata within HTML</td>
  </tr>
  <tr>
    <td><div itemscope itemtype="http://schema.org/Event">
<div itemprop="name">Epigenomics of Common Diseases</div>
<div itemprop="description">This conference will bring together leading scientists from the  fields of epigenomics, genetics and bioinformatics. </div>
<div>Event type: <span itemprop="eventType">Workshops and courses</span></div>
<div>Date: <meta itemprop="startDate" content="2015-04-15T">Wednesday 14 April 2015</div>
   ...
</div></td>
  </tr>
</table>


For more information, please refer to the [Microdata Guide on Schema.org](https://schema.org/docs/gs.html).

### RDFa

[RDFa](https://en.wikipedia.org/wiki/RDFa) (or[ Resource Description Framework](https://en.wikipedia.org/wiki/Resource_Description_Framework) in Attributes[[1]](https://en.wikipedia.org/wiki/RDFa#cite_note-n-1)) is a[ W3C](https://en.wikipedia.org/wiki/W3C) Recommendation that adds a set of attribute-level extensions to[ HTML](https://en.wikipedia.org/wiki/HTML),[ XHTML](https://en.wikipedia.org/wiki/XHTML) and various XML-based document types for embedding rich[ metadata](https://en.wikipedia.org/wiki/Metadata) within web documents. Example below explains the use of RDFa within HTML tags. 

<table>
  <tr>
    <td>Example 4. Embedding Event properties as RDFa within HTML</td>
  </tr>
  <tr>
    <td><div vocab="http://schema.org/" typeof="Event">
<div property="name">Epigenomics of Common Diseases</div>
<div property="description">This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics. </div>
<div>Event type: <span property="eventType">Workshops and courses</span></div>
<div>Date: <meta property="startDate" content="2015-04-15T">Wednesday 14 April 2015</div>
   ...
</div> </td>
  </tr>
</table>


 

For more information, please refer to the [RDFa wiki](http://rdfa.info/).

### JSON-LD

[JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) (JavaScript Object Notation for Linked Data), is a method of transporting[ Linked Data](https://en.wikipedia.org/wiki/Linked_Data) using[ JSON](https://en.wikipedia.org/wiki/JSON). Example below represents an Event described in JSON-LD format. 

<table>
  <tr>
    <td>Example 5. Representing an Event in JSON-LD format</td>
  </tr>
  <tr>
    <td><script type="application/ld+json">
{
"@context": "http://schema.org/",
"@type": "Event",
"name": "Epigenomics of Common Diseases",
"description": "This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics.",
"eventType": "Workshops and courses",
"startDate": "2015-04-15T",
  ...
}
</script></td>
  </tr>
</table>


For more information, please refer to the [JSON-LD specification](http://www.w3.org/TR/json-ld/).

# Glossary

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


# Further examples

<table>
  <tr>
    <td>Example 6. Event containing all the minimum (M) fields</td>
  </tr>
  <tr>
    <td>Microdata:
<div itemscope itemtype="http://schema.org/Event">
<meta itemprop="eventId" content="id6593990">
<div itemprop="name">Epigenomics of Common Diseases</div>
<div itemprop="description">This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics. </div>
<div>Event type: <span itemprop="eventType">Workshops and courses</span></div>
<div>Date: <meta itemprop="startDate" content="2015-04-15T">Wednesday 14 April 2015</div>
<div itemprop="location" itemscope itemtype="http://schema.org/Place">
Location:
<span itemprop="name">Greensands Conference Centre</span>
<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<span itemprop="streetAddress">6 Burridge Road</span><br>
<span itemprop="addressLocality">Manchester</span><br>
<span itemprop="postalCode">M15 3RT</span><br>
<span itemprop="addressCountry">UK</span>
</div> 
</div>
<div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
Price:
<span itemprop="priceCurrency" content="GBP">£</span><span
itemprop="price" content="100.00">100.00</span>
</div>
<div itemprop="contact">
<div itemscope itemtype="http://schema.org/Person">
Contact:
<span itemprop="name">Jane Doe</span> 
(<a href="mailto:jane-doe@nwu.ac.uk" itemprop="email">
    jane-doe@nwu.ac.uk</a>)
</div>
</div>
<div itemprop="hostInstitution">
Host institution: 
<div itemscope itemtype="http://schema.org/Organization">
<span itemprop="name">North West University</span>
</div> 
</div>
<div>Link: <a itemprop="url" href="http://www.nwu.ac.uk/event-url">North West University website</a></div>
<div>Topics:<span itemprop="topic">Biomedical science</span>, <span itemprop="topic">Human disease</span>
</div>
</div>

RDFa:
<div vocab="http://schema.org/" typeof="Event">
<meta property="eventId" content="id6593990">
<div property="name">Epigenomics of Common Diseases</div>
<div property="description">This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics. </div>
<div>Event type: <span property="eventType">Workshops and courses</span></div>
<div><meta property="startDate" content="2015-04-15T">Wednesday 14 April 2015</div>
<div property="location" typeof="Place">
Location:
<span property="name">Greensands Conference Centre</span>
<div property="address" typeof="postalAddress">
<span property="streetAddress">6 Burridge Road</span><br>
<span property="addressLocality">Manchester</span><br>
<span property="postalCode">M15 3RT</span><br>
<span property="addressCountry">UK</span>
</div> 
</div>
<div property="offers" typeof="Offer">
Price:
<span property="priceCurrency" content="GBP">£</span><span
property="price" content="100.00">100.00</span>
</div>
<div property="contact">
<div typeof="Person">
Contact:
<span property="name">Jane Doe</span> 
(<a href="mailto:jane-doe@nwu.ac.uk" property="email">
    jane-doe@nwu.ac.uk</a>)
</div>
</div>
<div property="hostInstitution">
Host institution: 
<div typeof="Organization">
<span property="name">North West University</span>
</div> 
</div>
<div>Link: <a property="url" href="http://www.nwu.ac.uk/event-url">North West University website</a></div>
<div>Topics:<span property="topic">Biomedical science</span>, <span property="topic">Human disease</span>
</div>
</div> 

JSON-LD:
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "Event",
"eventId": "id6593990",
"name": "Epigenomics of Common Diseases",
"description": "This conference will bring together leading scientists from the fields of epigenomics, genetics and bioinformatics.",
"type": "Workshops and courses",
"startDate": "2015-04-15T",
"location": {
"name": "Greensands Conference Centre",
"@type": "Place",
"address": {
			"@type": "PostalAddress",
			"streetAddress": "6 Burridge Road",
			"addressLocality": "Manchester",
			"postalCode": "M15 3RT",
			"addressCountry": "UK"
}
},
"contact": {
"@type": "Person",
"name": "Jane Doe",
"email": "jane.doe@nwu.ac.uk"
},
"offers": {
"@type": "Offer",
"price": "100.00",
"priceCurrency": "GBP"
},
"hostInstitution": {
"@type": "Organization",
"name": "North West University"
},
"url": "http://www.nwu.ac.uk/event-url",
"topic": "Biomedical science",
"topic": "Human disease"
}
</script></td>
  </tr>
</table>


<table>
  <tr>
    <td>Example 7. Using the url property as the event organiser and as a third party event advertiser</td>
  </tr>
  <tr>
    <td>As the event organiser
You can include a hidden link to an external event advertiser on your site by using the "same as" property:

<div itemscope itemtype="http://schema.org/Event">
...
<div>Link: 
<a itemprop="url" href="http://www.nwu.ac.uk/event-url">Epigenomics of Common Diseases</a>
<link itemprop="sameAs" href="http://externaladvertiser.com/nwu-event"/>
</div>
   ...
</div>

As an external event advertiser
It is recommended that you add a link on your site to the source of the information about the event:

<div itemscope itemtype="http://schema.org/Event">
...
<div>Link: 
<a itemprop="url" href="http://www.externaladvertiser.com/nwu-event">Epigenomics of Common Diseases</a>
<link itemprop="sameAs" href="http://www.nwu.ac.uk/event-url"/>
</div>
   ...
</div>
</td>
  </tr>
</table>


<table>
  <tr>
    <td>Example 8. Using the proposed new ontologyTerm type</td>
  </tr>
  <tr>
    <td>Example of a keyword field using terms from different ontologies. In this case a term from EDAM, a term from MeSH and a custom term.

<div itemscope itemtype="http://schema.org/Event">
…
Keywords:
<div itemscope itemtype="http://schema.org/ontologyTerm">
<link itemprop="ontologyName" href="http://purl.bioontology.org/ontology/EDAM">
<meta itemprop="termId" content="data_0006">
<span itemprop="termName">Metagenomics</span>
<div>,
<div itemscope itemtype="http://schema.org/ontologyTerm">
<link itemprop="ontologyName" href="https://www.nlm.nih.gov/mesh/">
<meta itemprop="termId" content="D056186">
<span itemprop="termName">Metagenomics</span>
<div>
<div itemscope itemtype="https://schema.org/CreativeWork">
<meta itemprop="keywords" content="disease, bioinformatics">
<span>Disease, Bioinformatics</span>
<div>
   ...
</div>

</td>
  </tr>
</table>


