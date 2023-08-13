from typing import Any, List, Mapping, Optional
from bardapi import Bard

from langchain.callbacks.manager import CallbackManagerForLLMRun
from langchain.llms.base import LLM

class CustomLLM(LLM):

    @property
    def _llm_type(self) -> str:
        return "custom"

    def _call(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[CallbackManagerForLLMRun] = None,
    ) -> str:
        if stop is not None:
            raise ValueError("stop kwargs are not permitted.")
        
        bard = Bard(token='ZwisLLdfCWYeAMJnPovavijpQHv5-eC5dOQH5IrqJCdY8VA-eM4EJEFupYK8KYt8yYbqfA.')
        response = bard.get_answer("What is a LLM?")['content']
        return response