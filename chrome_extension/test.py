# import os
# from bardapi import Bard

# token = 'ZwisLAePL66qqdKyXKMUht0HGXCnoGP3Wg4qnGim0HYaAH9AJbUAcqEJKSGS9fu0jNjLEQ.'
# bard = Bard(token=token)
# response = bard.get_answer("What is a LLM?")['content']
# print(response)

from langchain import PromptTemplate, LLMChain
import customLLM

template = """
Let's think step by step of the question: {question}
Based on all the thought the final answer becomes:
"""
prompt = PromptTemplate(template=template, input_variables=["question"])

llm = customLLM.CustomLLM()

llm_chain = LLMChain(prompt=prompt, llm=llm, verbose=True)

# run the chain with your query (question)

llm_chain('Who is the CEO of Google and why he became the ceo of Google?')